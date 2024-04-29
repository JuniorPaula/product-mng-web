<template>
  <header class="bg-gray-800 py-4">
    <div class="container mx-auto flex justify-between items-center px-4">
        <!-- Logo -->
        <a href="#" class="text-white font-bold text-xl">Logo</a>
        <!-- Navbar -->
        <nav class="hidden md:block">
            <ul class="flex space-x-4">
                <li><a href="#" class="text-white">Home</a></li>
                <li><a href="#" class="text-white">Sobre</a></li>
                <li><a href="#" class="text-white">Serviços</a></li>
                <li><a href="#" class="text-white">Contato</a></li>
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
 data() {
  return {
   title: "Hello World!",
  };
 },
};

</script>

