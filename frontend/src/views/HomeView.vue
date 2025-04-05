<template>
  <main class="p-8 max-w-6xl mx-auto text-center">
    <h1 class="text-3xl font-bold mb-6">Добро пожаловать в Vue 3 + Pinia</h1>

    <div class="my-8">
      <a
        href="/todos"
        class="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors"
        >Перейти к списку задач</a
      >
    </div>

    <div class="mt-8 p-4 border border-gray-300 rounded-lg">
      <h2 class="text-2xl font-semibold mb-4">Счетчик Pinia</h2>
      <p class="mb-2">Значение: {{ counter.count }}</p>
      <p class="mb-4">Удвоенное значение: {{ counter.doubleCount }}</p>
      <button @click="counter.increment()" class="btn btn-primary">
        Увеличить счетчик
      </button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useCounterStore } from "../stores/counter";

const counter = useCounterStore();
</script>
