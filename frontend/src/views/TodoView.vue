<template>
  <main class="max-w-4xl mx-auto p-8">
    <h1 class="text-3xl font-bold mb-6">Список задач</h1>

    <div
      v-if="todosStore.isLoading"
      class="p-4 my-4 bg-gray-100 rounded text-center"
    >
      Загрузка данных... Пожалуйста, подождите.
    </div>

    <div
      v-if="todosStore.error"
      class="p-4 my-4 bg-red-100 text-red-800 rounded text-center"
    >
      {{ todosStore.error }}
    </div>

    <form
      @submit.prevent="addTodo"
      class="bg-white p-6 rounded-lg shadow-md mb-8"
    >
      <h2 class="text-xl font-semibold mb-4">Добавить новую задачу</h2>
      <div class="mb-4">
        <label for="title" class="block font-medium mb-2">Название</label>
        <input
          id="title"
          v-model="newTodo.title"
          type="text"
          placeholder="Введите название задачи"
          required
          class="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div class="mb-4">
        <label for="description" class="block font-medium mb-2">Описание</label>
        <textarea
          id="description"
          v-model="newTodo.description"
          placeholder="Введите описание задачи"
          required
          class="w-full p-2 border border-gray-300 rounded min-h-[100px] resize-y"
        ></textarea>
      </div>
      <button
        type="submit"
        :disabled="todosStore.isLoading"
        class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {{ todosStore.isLoading ? 'Добавление...' : 'Добавить задачу' }}
      </button>
    </form>

    <div
      v-if="todosStore.todos.length === 0"
      class="p-4 my-4 text-center bg-yellow-50 rounded"
    >
      Задач пока нет. Добавьте первую задачу выше!
    </div>

    <div v-else class="flex flex-col gap-4">
      <h2 class="text-xl font-semibold mb-2">Ваши задачи</h2>
      <div
        v-for="todo in todosStore.todos"
        :key="todo.id"
        class="bg-white rounded-lg shadow-md p-4 flex flex-col gap-4"
        :class="{ 'border-l-4 border-green-500': todo.completed }"
      >
        <div>
          <h3
            class="font-medium mb-2"
            :class="{
              'line-through text-gray-500': todo.completed,
            }"
          >
            {{ todo.title }}
          </h3>
          <p class="mb-2">{{ todo.description }}</p>
          <div class="flex justify-between text-gray-500 text-sm mt-2">
            <span
              >Создано: {{ new Date(todo.createdAt).toLocaleString() }}</span
            >
            <span
              >Обновлено: {{ new Date(todo.updatedAt).toLocaleString() }}</span
            >
          </div>
        </div>
        <div class="flex gap-2">
          <button
            @click="toggleTodoStatus(todo.id)"
            :class="[
              'py-1 px-3 rounded text-white transition-colors',
              todo.completed
                ? 'bg-yellow-500 hover:bg-yellow-600'
                : 'bg-green-500 hover:bg-green-600',
            ]"
          >
            {{
              todo.completed ? 'Вернуть в работу' : 'Отметить как выполненную'
            }}
          </button>
          <button
            @click="deleteTodo(todo.id)"
            class="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded transition-colors"
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { useTodosStore } from '../stores/todos';

const todosStore = useTodosStore();

const newTodo = reactive({
  title: '',
  description: '',
});

async function addTodo() {
  if (newTodo.title && newTodo.description) {
    await todosStore.createTodo({
      title: newTodo.title,
      description: newTodo.description,
    });

    // Reset form after submission
    newTodo.title = '';
    newTodo.description = '';
  }
}

async function toggleTodoStatus(id: number) {
  await todosStore.toggleTodoStatus(id);
}

async function deleteTodo(id: number) {
  if (confirm('Вы уверены, что хотите удалить эту задачу?')) {
    await todosStore.deleteTodo(id);
  }
}

onMounted(() => {
  todosStore.fetchTodos();
});
</script>
