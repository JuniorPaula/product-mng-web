<template>
  <div class="container mx-auto p-4 m-5">
    <div class="flex justify-between mb-5">
      <h1 class="text-3xl font-bold mb-6">Usuários</h1>
      <router-link to="/user/0" class="bg-green-500 text-white px-4 flex items-center  hover:bg-green-600 p-2 mx-2">
        Adicionar
      </router-link>
    </div>
    <table class="table-auto border-separate border-spacing-1 w-full">
      <thead>
        <tr>
          <th class="px-4 py-2 bg-gray-800 text-white">ID</th>
          <th class="px-4 py-2 bg-gray-800 text-white">Nome</th>
          <th class="px-4 py-2 bg-gray-800 text-white">Email</th>
          <th class="px-4 py-2 bg-gray-800 text-white">Administrador</th>
          <th class="px-4 py-2 bg-gray-800 text-white w-36">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="u in this.users" :key="u.id">
          <td class="border px-4 py-2 text-center">{{ u.id }}</td>
          <td class="border px-4 py-2 text-center">{{ u.name }}</td>
          <td class="border px-4 py-2 text-center">{{ u.email }}</td>
          <td class="border px-4 py-2 text-center">{{ u.is_admin ? 'SIM' : 'NÃO' }}</td>
          <td class="border px-4 py-2 flex justify-center">
            <router-link :to="`/user/${u.id}`" class=" text-blue-500 hover:text-blue-700 font-bold p-2 mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { configs } from '@/configs';
import { Security } from '@/request/security';
import { useToast } from 'vue-toastification';

const toast = useToast();

export default {
  name: "Users",
  data() {
    return {
      users: []
    };
  },
  beforeMount() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      fetch(`${configs.API_URL}/users`, Security.requestOptions(null))
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            toast.error(data.message);
            return;
          } else {
            this.users = data.data;
          }
        })
        .catch((error) => {
          toast.error("Ocorreu um erro ao buscar usuários");
        });
    }
  }
}
</script>