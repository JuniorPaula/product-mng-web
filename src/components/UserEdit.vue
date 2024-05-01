<template>
  <div class="container mx-auto">
    <div class="flex w-2/4 justify-between items-center mx-auto mt-4 mb-4">
      <h1 class="text-3xl font-bold text-center my-6">
        {{ this.user.id === '0' ? 'Adicionar novo usuário' : 'Editar Usuário' }}
      </h1>
      <router-link to="/users" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4">
        Voltar
      </router-link>
    </div>
    <div class="container w-2/4 mx-auto">
      <form @submit.prevent="update">
        <div class="flex flex-col">
          <label for="name" class="text-lg font-bold my-2">Nome:</label>
          <input type="text" v-model="user.name" id="name"
            class="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div class="flex flex-col mt-4">
          <label for="email" class="text-lg font-bold my-2">Email:</label>
          <input type="email" v-model="user.email" id="email"
            class="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div class="flex items-center mt-4">
          <label for="is_admin" class="text-lg font-bold mr-4">Administrador:</label>
          <input type="checkbox" v-model="user.is_admin" id="is_admin" class="border p-2" />
        </div>
        <div class="flex mt-7">
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-3">
            {{ this.user.id === '0' ? 'Adicionar' : 'Atualizar' }}
          </button>
          <button v-if="this.user.id !== '0'" type="button" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4">
            Deletar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserEdit",
  data() {
    return {
      user: {
        id: "",
        name: "",
        email: "",
        is_admin: false
      }
    };
  },
  beforeMount() {
    this.user.id = document.location.href.split('/').pop();

    // this.getUser();
  },
  methods: {
    getUser() {
      //
    },
    update() {
      //
    }
  }
};
</script>