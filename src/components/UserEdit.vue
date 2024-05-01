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
          <button v-if="this.pathId !== '0' && !this.user.is_admin" type="button" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4">
            Deletar
          </button>
        </div>
      </form>
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
    }
  }
};
</script>