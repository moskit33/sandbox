<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';

onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <div id="app" class="mx-auto font-normal">
    <header
      class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
    >
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <div
          class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
        ></div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul
            class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li class="inline-block mr-5">
              <RouterLink
                to="/"
                class="inline-block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                >Главная</RouterLink
              >
            </li>
            <li class="inline-block mr-5">
              <RouterLink
                to="/todos"
                class="inline-block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                >Задачи</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style></style>
