import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Todo {
  id: number
  title: string
  description: string
  completed: boolean
  createdAt: string
  updatedAt: string
}

interface CreateTodoPayload {
  title: string
  description: string
  completed?: boolean
}

interface UpdateTodoPayload {
  title?: string
  description?: string
  completed?: boolean
}

const API_URL = 'http://localhost:3000/todos'

export const useTodosStore = defineStore('todos', () => {
  const todos = ref<Todo[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  async function fetchTodos() {
    isLoading.value = true
    error.value = null
    
    try {
      const response = await fetch(API_URL)
      if (!response.ok) {
        throw new Error('Failed to fetch todos')
      }
      todos.value = await response.json()
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'An error occurred'
      console.error(error.value)
    } finally {
      isLoading.value = false
    }
  }

  async function getTodo(id: number) {
    isLoading.value = true
    error.value = null
    
    try {
      const response = await fetch(`${API_URL}/${id}`)
      if (!response.ok) {
        throw new Error(`Failed to fetch todo with id ${id}`)
      }
      return await response.json()
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'An error occurred'
      console.error(error.value)
      return null
    } finally {
      isLoading.value = false
    }
  }

  async function createTodo(todoData: CreateTodoPayload) {
    isLoading.value = true
    error.value = null
    
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todoData),
      })
      
      if (!response.ok) {
        throw new Error('Failed to create todo')
      }
      
      const newTodo = await response.json()
      todos.value.push(newTodo)
      return newTodo
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'An error occurred'
      console.error(error.value)
      return null
    } finally {
      isLoading.value = false
    }
  }

  async function updateTodo(id: number, todoData: UpdateTodoPayload) {
    isLoading.value = true
    error.value = null
    
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todoData),
      })
      
      if (!response.ok) {
        throw new Error(`Failed to update todo with id ${id}`)
      }
      
      const updatedTodo = await response.json()
      const index = todos.value.findIndex(todo => todo.id === id)
      if (index !== -1) {
        todos.value[index] = updatedTodo
      }
      return updatedTodo
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'An error occurred'
      console.error(error.value)
      return null
    } finally {
      isLoading.value = false
    }
  }

  async function deleteTodo(id: number) {
    isLoading.value = true
    error.value = null
    
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      })
      
      if (!response.ok) {
        throw new Error(`Failed to delete todo with id ${id}`)
      }
      
      todos.value = todos.value.filter(todo => todo.id !== id)
      return true
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'An error occurred'
      console.error(error.value)
      return false
    } finally {
      isLoading.value = false
    }
  }

  async function toggleTodoStatus(id: number) {
    const todo = todos.value.find(todo => todo.id === id)
    if (todo) {
      return updateTodo(id, { completed: !todo.completed })
    }
    return null
  }

  return {
    todos,
    isLoading,
    error,
    fetchTodos,
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo,
    toggleTodoStatus
  }
}) 