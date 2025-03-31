import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/todos',
    name: 'todos',
    component: () => import('../views/TodoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 