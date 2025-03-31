<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="hello-container">
    <img class="logo" src="@/assets/logo.svg" alt="Vue logo" />

    <h1>
      {{ msg }}
    </h1>

    <p>
      На этой странице вы можете увидеть работу Vue 3 + Pinia. Перейдите к
      списку задач для управления вашими задачами.
    </p>

    <div class="actions">
      <a href="/todos" class="btn-primary">Перейти к задачам</a>
    </div>
  </div>
</template>

<style scoped>
.hello-container {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  max-width: 200px;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  margin-bottom: 1rem;
}

p {
  margin-bottom: 2rem;
}

.actions {
  margin-top: 2rem;
}

.btn-primary {
  display: inline-block;
  background-color: var(--color-primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: var(--color-secondary);
}

@media (min-width: 1024px) {
  .hello-container {
    padding: 4rem;
  }
}
</style>
