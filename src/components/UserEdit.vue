<template>
  <div class="container mx-auto">
    <div class="flex w-2/4 justify-between items-center mx-auto mt-4 mb-4">
      <h1 class="text-3xl font-bold text-center my-6">
        {{ this.pathId === '0' ? 'Adicionar novo usuário' : 'Editar Usuário' }}
      </h1>
      <router-link to="/users" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4">
        Voltar
      </router-link>
    </div>
    <div class="container w-2/4 mx-auto">
      <form @submit.prevent="submitHandler">
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
        <div v-if="this.pathId === '0'" class="flex flex-col mt-4">
          <label for="password" class="text-lg font-bold my-2">Senha:</label>
          <input type="password" v-model="user.password" id="password"
            class="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div class="flex items-center mt-4">
          <label for="is_admin" class="text-lg font-bold mr-4">Administrador:</label>
          <input type="checkbox" v-model="user.is_admin" id="is_admin" class="border p-2" />
        </div>
        <div class="flex mt-7">
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-3">
            {{ this.pathId === '0' ? 'Adicionar' : 'Atualizar' }}
          </button>
          <button @click="() => toggleModal()" v-if="this.pathId !== '0' && !this.user.is_admin" type="button" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4">
            Deletar
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- modal -->
  <div id="modalDelete" class="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 ">
    <div class="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">

      <div class="flex justify-end p-2">
        <button @click="toggleModal()" type="button"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>

      <div class="p-6 pt-0 text-center">
        <svg class="w-20 h-20 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h3 class="text-xl font-normal text-gray-500 mt-5 mb-6">Tem certeza que deseja deletar esse usuário?</h3>
        <a href="#" @click="confirmDelete()"
          class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2">
          Deletar
        </a>
        <a href="#" @click="toggleModal()"
          class="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center"
          data-modal-toggle="delete-user-modal">
          Cancelar
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { configs } from '@/configs';
import { Security } from '@/request/security';
import { useToast } from 'vue-toastification';

const toast = useToast();

export default {
  name: "UserEdit",
  data() {
    return {
      pathId: "",
      user: {
        name: "",
        email: "",
        password: "",
        is_admin: false
      }
    };
  },
  beforeMount() {
    this.pathId = document.location.href.split('/').pop();
    if (this.pathId !== "0") {
      this.getUser();
    }
  },
  methods: {
    getUser() {
      fetch(`${configs.API_URL}/users/${this.pathId}`, Security.requestOptions(null))
        .then((response) => response.json())
        .then(({ error, message, data }) => {
          if (error) {
            toast.error(message);
            return;
          }
          this.user.name = data.name;
          this.user.email = data.email;
          this.user.is_admin = data.is_admin;
        });
    },
    submitHandler() {
      if (this.pathId === "0" ) {
        if (!this.user.name || !this.user.email || !this.user.password) {
          toast.error("Preencha todos os campos!");
          return;
        }

        const payload = {
          name: this.user.name,
          email: this.user.email,
          password: this.user.password,
          is_admin: this.user.is_admin
        };

        fetch(`${configs.API_URL}/users`, Security.requestOptions(payload, "POST"))
          .then((response) => response.json())
          .then(({ error, message }) => {
            if (error) {
              toast.error(message);
              return;
            }
            toast.success("Usuário adicionado com sucesso!");
            this.$router.push("/users");
          });

      } else {
        const payload = {
          name: this.user.name,
          email: this.user.email,
          is_admin: this.user.is_admin
        };

        fetch(`${configs.API_URL}/users/${this.pathId}`, Security.requestOptions(payload, "PUT"))
          .then((response) => response.json())
          .then(({ error, message }) => {
            if (error) {
              toast.error(message);
              return;
            }

            toast.success("Usuário atualizado com sucesso!");
            this.$router.push("/users");
          });
      }
    },
    toggleModal() {
      const modal = document.getElementById("modalDelete");
      if (modal.style.display === "block") {
        modal.style.display = "none";
      } else {
        modal.style.display = "block";
      }
    },
    confirmDelete() {
      document.getElementById("modalDelete").style.display = "none";

      fetch(`${configs.API_URL}/users/${this.pathId}`, Security.requestOptions(null, "DELETE"))
        .then((response) => response.json())
        .then(({ error, message }) => {
          if (error) {
            toast.error(message);
            return;
          } else {
            toast.success("Usuário deletado com sucesso!");
            this.$router.push("/users");
          }
        })
        .catch(() => {
          toast.error("Ocorreu um erro ao deletar o usuário!");
        });
    },
  }
};
</script>