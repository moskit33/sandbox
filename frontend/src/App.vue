<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import TailwindDemo from "./components/TailwindDemo.vue";
</script>

<template>
  <div id="app" class="max-w-7xl mx-auto p-8 font-normal">
    <header class="mb-8">
      <div class="wrapper">
        <nav class="w-full text-center mb-8">
          <RouterLink
            to="/"
            class="inline-block px-4 border-r border-gray-300 hover:text-green-600 transition-colors"
            >Главная</RouterLink
          >
          <RouterLink
            to="/todos"
            class="inline-block px-4 hover:text-green-600 transition-colors"
            >Задачи</RouterLink
          >
        </nav>
      </div>
    </header>

    <TailwindDemo class="mb-8" />

    <RouterView />
  </div>
</template>

<style>
/* We keep base.css import but will rely on Tailwind for most styling */
@import "./assets/base.css";
</style>
