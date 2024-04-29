<template>
  <header class="bg-gray-800 py-4">
    <div class="container mx-auto flex justify-between items-center px-4">
        <!-- Logo -->
        <a href="#" class="text-white font-bold text-xl">Logo</a>
        <!-- Navbar -->
        <nav class="hidden md:block">
            <ul class="flex space-x-4">
                <li><a href="/prodcuts" class="text-white">Produtos</a></li>
                <li><a href="/users" class="text-white">Usuários</a></li>
            </ul>
        </nav>
        <div class="flex space-x-4">
            <p class="text-white">nome do usuário</p>
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