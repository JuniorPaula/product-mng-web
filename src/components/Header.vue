<template>
  <header class="bg-gray-800 py-4">
    <div class="container mx-auto flex justify-between items-center px-4">
        <!-- Logo -->
        <router-link to="/" class="text-white font-bold text-xl">Inventório</router-link>
        <!-- Navbar -->
        <nav class="hidden md:block">
            <ul class="flex space-x-4">
                <li><router-link to="/" class="text-white">Produtos</router-link></li>
                <li><router-link to="/users" class="text-white">Usuários</router-link></li>
            </ul>
        </nav>
        <div class="flex space-x-4">
            <p class="text-white">nome do usuário</p>
            <router-link to="/login" class="text-white">Login</router-link>
            <a href="#" class="text-red-500">Sair</a>
        </div>
    </div>
  </header>
</template>

<script>

export default {
  name: "Header",
}
</script>