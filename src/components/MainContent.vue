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
            <button @click="() => toggleModalDelete(p.id)" class="bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded">
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

  <div id="modalDelete"
    class="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 ">
    <div class="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">

      <div class="flex justify-end p-2">
        <button @click="toggleModalDelete('modalDelete')" type="button"
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
        <h3 class="text-xl font-normal text-gray-500 mt-5 mb-6">Are you sure you want to delete this user?</h3>
        <a href="#" @click="confirmDelete()"
          class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2">
          Yes, I'm sure
        </a>
        <a href="#" @click="toggleModalDelete('modalDelete')"
          class="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center"
          data-modal-toggle="delete-user-modal">
          No, cancel
        </a>
      </div>

    </div>
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
      productId: "",
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
  methods: {
    toggleModalDelete(id) {
      this.productId = id;
      const modal = document.getElementById("modalDelete");
      if (modal.style.display === "block") {
        modal.style.display = "none";
      } else {
        modal.style.display = "block";
      }
    },
    confirmDelete() {
      console.log('evt', this.productId);
    },
  },
};
</script>