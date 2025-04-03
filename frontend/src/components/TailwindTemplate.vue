<template>
  <div class="p-4">
    <!-- 
      This is a template component showing how to use Tailwind in Vue.
      Copy this file as a starting point for new components.
      
      Common Tailwind patterns:
      - Spacing: p-4 (padding), m-4 (margin), px-4 (horizontal padding), etc.
      - Flex: flex flex-col items-center justify-between
      - Grid: grid grid-cols-3 gap-4
      - Colors: text-blue-500 bg-gray-100 border-green-200
      - Typography: text-lg font-bold text-center
      - Responsive: sm:flex md:grid lg:text-xl
      - Hover/Focus: hover:bg-blue-700 focus:ring-2
    -->
    <h2 class="text-2xl font-bold mb-4 text-gray-800">Component Title</h2>
    <div class="bg-white rounded-lg shadow p-6">
      <p class="text-gray-600">Your content here</p>
      <div class="mt-4 flex justify-end">
        <button
          class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
        >
          Action Button
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Your component logic here
</script>

<!-- 
  No need for <style> section when using Tailwind!
  All styling is done with utility classes in the template.
  
  If you need component-specific styles that can't be accomplished with Tailwind,
  you can use the @apply directive:
  
  <style>
  .custom-element {
    @apply bg-blue-100 p-4 rounded;
  }
  </style>
-->
