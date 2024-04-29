<template>
  <footer class="bg-gray-800 py-4">
    <div class="container mx-auto flex justify-between items-center px-4">
        <p class="text-white">Todos os direitos reservados</p>
        <p class="text-white">&copy {{ new Date().getFullYear() }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
}
</script>