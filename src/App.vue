<template>
 <Header />
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold text-center">{{ title }}</h1>
    <p class="text-center">Welcome to your Vue.js application</p>
  </div>
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
 data() {
  return {
   title: "Hello World!",
  };
 },
};

</script>

