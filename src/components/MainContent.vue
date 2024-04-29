<template>
  <div class="container mx-auto p-4 flex-1 h-screen">
    <h1 class="text-2xl font-bold text-center">{{ title }}</h1>
    <p class="text-center">Welcome to your Vue.js application</p>
  </div>
</template>

<script>
export default {
  name: "MainContent",
  data() {
    return {
      title: "Produtos",
    };
  },
};
</script>