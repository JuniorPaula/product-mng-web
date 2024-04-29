<template>
 <Header /> 
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
 data() {
  return {
   title: "Hello World!",
  };
 },
};

</script>

