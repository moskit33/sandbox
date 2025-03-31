<template>
  <main>
    <h1>Добро пожаловать в Vue 3 + Pinia</h1>

    <div class="actions">
      <a href="/todos" class="btn-primary">Перейти к списку задач</a>
    </div>

    <div class="counter">
      <h2>Счетчик Pinia</h2>
      <p class="counter-value">Значение: {{ counter.count }}</p>
      <p class="counter-double">
        Удвоенное значение: {{ counter.doubleCount }}
      </p>
      <button @click="counter.increment()">Увеличить счетчик</button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useCounterStore } from "../stores/counter";

const counter = useCounterStore();
</script>

<style scoped>
main {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.actions {
  margin: 2rem 0;
}

.btn-primary {
  display: inline-block;
  background-color: #42b983;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #3aa876;
}

.counter {
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
}

button:hover {
  background-color: #45a049;
}
</style>
