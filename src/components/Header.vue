<template>
  <header class="bg-gray-800 py-4">
    <div class="container mx-auto flex justify-between items-center px-4">
        <!-- Logo -->
        <router-link to="/" class="text-white font-bold text-xl">Inventório</router-link>
        <!-- Navbar -->
        <nav class="hidden md:block">
            <ul class="flex space-x-4">
                <li><router-link to="/" class="text-white">Produtos</router-link></li>
                <li><router-link v-if="store.user.isAdmin" to="/users" class="text-white">Usuários</router-link></li>
            </ul>
        </nav>
        <div class="flex space-x-4">
            <p class="text-white">{{ store.user.name ?? "" }}</p>
            <a href="javascript:void(0);" @click="logout" class="text-red-500">Sair</a>
        </div>
    </div>
  </header>
</template>

<script>
import { store } from "../store";

export default {
  name: "Header",
  data() {
    return {
      store,
    };
  },
  methods: {
    logout() {
      store.token = "";
      store.user = {};
      store.isLogged = false;

      // destroy cookie
      document.cookie = "_site=; path=/; "
      + "SameSite=Srict; Secure; expires=Thu, 01 Jan 1970 00:00:00 GTM;"

      this.$router.push("/login");
    }
  }
}
</script>