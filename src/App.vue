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

const getCookie = (name) => {
  return document.cookie.split("; ").reduce((r, v) => {
    const parts = v.split("=");
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, "");
}

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
 beforeMount() {
  // check for the cookie
  let data = getCookie("_site");
  
  if (data !== "") {
    let cookieData = JSON.parse(data);

    // update the store
    store.token = cookieData.access_token;
    store.isLogged = true;
    store.user = {
      id: cookieData.id,
      name: cookieData.name,
      isAdmin: cookieData.is_admin
    };
  }
 },
};

</script>

