<template>
  <div class="container mx-auto p-4 m-5">
    <h1 class="text-2xl font-bold mb-6">{{ title }}</h1>
    <table class="table-auto border-separate border-spacing-1 w-full">
      <thead>
        <tr>
          <th class="px-4 py-2 bg-gray-800 text-white">ID</th>
          <th class="px-4 py-2 bg-gray-800 text-white">Nome</th>
          <th class="px-4 py-2 bg-gray-800 text-white">Preço</th>
          <th class="px-4 py-2 bg-gray-800 text-white w-36">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in this.products" v-bind:key="p.id">
          <td class="border px-4 py-2">{{ p.id }}</td>
          <td class="border px-4 py-2">{{ p.name }}</td>
          <td class="border px-4 py-2">R$ {{ p.price }}</td>
          <td class="border px-4 py-2">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 mx-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>

            </button>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { configs } from '@/configs';
import { Security } from '@/request/security';

export default {
  name: "MainContent",
  data() {
    return {
      title: "Todos os Produtos",
      products: [],
    };
  },
  beforeMount() {
    Security.requireToken();

    fetch(`${configs.API_URL}/products`, Security.requestOptions(null))
      .then((response) => response.json())
      .then(({ error, message, data }) => {
        if (error) {
          console.error(message);
          return;
        }
        this.products = data;
      });
  },
};
</script>