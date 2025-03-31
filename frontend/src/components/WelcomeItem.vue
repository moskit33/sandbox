<template>
  <div class="item">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
// Standard Vue 3 component
</script>

<style scoped>
.item {
  display: flex;
  margin-bottom: 2rem;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background-color: var(--color-primary);
  color: white;
  margin-right: 1rem;
}

.details h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--color-heading);
}

@media (min-width: 768px) {
  .item {
    margin-bottom: 2.5rem;
  }
}
</style>
