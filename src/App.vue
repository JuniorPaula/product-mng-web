<template>
 <Header />
 <div class="container mx-auto p-4 flex-1 h-screen">
    <router-view />
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
  return {};
 },
};

</script>

