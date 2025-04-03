<script setup lang="ts"></script>

<template>
  <div class="welcome-container">
    <div class="welcome-card">
      <div class="card-header">
        <DocumentationIcon />
        <h2>Добро пожаловать в Vue 3 + Pinia</h2>
      </div>
      <div class="card-content">
        <p>
          Этот проект демонстрирует использование современного стека Vue 3 с
          Pinia для управления состоянием. Вы можете управлять задачами,
          используя RESTful API.
        </p>
      </div>
    </div>

    <div class="welcome-card">
      <div class="card-header">
        <DocumentationIcon />
        <h2>Документация</h2>
      </div>
      <div class="card-content">
        <p>
          Vue 3 предоставляет усовершенствованную систему реактивности,
          улучшенную производительность и Composition API для более гибкого
          подхода к созданию компонентов.
        </p>

        <a class="btn-outline" href="https://vuejs.org/" target="_blank">
          Vue документация
        </a>
      </div>
    </div>

    <div class="welcome-card">
      <div class="card-header">
        <ToolingIcon />
        <h2>Инструменты</h2>
      </div>
      <div class="card-content">
        <div class="tools-grid">
          <div class="tool-item">
            <h3>Pinia</h3>
            <p>
              <a href="https://pinia.vuejs.org" target="_blank"
                >pinia.vuejs.org</a
              >
            </p>
          </div>

          <div class="tool-item">
            <h3>Vue Router</h3>
            <p>
              <a href="https://router.vuejs.org" target="_blank"
                >router.vuejs.org</a
              >
            </p>
          </div>

          <div class="tool-item">
            <h3>NestJS</h3>
            <p>
              <a href="https://nestjs.com" target="_blank">nestjs.com</a>
            </p>
          </div>
        </div>

        <a href="/todos" class="btn-primary">Перейти к списку задач</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.welcome-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.welcome-card {
  background-color: #fff;
  border-radius: var(--border-radius);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
}

.card-header h2 {
  margin: 0;
  font-size: 1.5rem;
  color: var(--color-heading);
}

.card-content {
  padding: 1.5rem;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.tool-item {
  padding: 1rem;
  border: 1px solid #e9ecef;
  border-radius: var(--border-radius);
}

.tool-item h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.btn-primary {
  display: block;
  width: 100%;
  background-color: var(--color-primary);
  color: white;
  text-align: center;
  padding: 0.75rem;
  border-radius: var(--border-radius);
  text-decoration: none;
  margin-top: 1.5rem;
  font-weight: 500;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: var(--color-secondary);
}

.btn-outline {
  display: inline-block;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  background: transparent;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  text-decoration: none;
  margin-top: 1rem;
  transition: all 0.3s;
}

.btn-outline:hover {
  background-color: var(--color-primary);
  color: white;
}

@media (min-width: 768px) {
  .btn-primary {
    display: inline-block;
    width: auto;
    padding: 0.75rem 2rem;
  }
}
</style>
