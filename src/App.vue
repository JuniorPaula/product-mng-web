<template>
 <Header v-if="store.isLogged" />
 <div class="container flex-1 h-screen">
    <router-view />
 </div>
  <Footer v-if="store.isLogged" />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import {store} from "./store";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
 data() {
  return {
    store,
  };
 },
};

</script>

