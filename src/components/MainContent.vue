<template>
  <div class="container mx-auto p-4 m-5">
    <div class="flex justify-between mb-5">
      <h1 class="text-3xl font-bold mb-6">{{ title }}</h1>
      <button class="bg-green-500 text-white px-4  hover:bg-green-600 transition" @click="openModal('modalAddProduct')">
        Adicionar
      </button>
    </div>
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
            <button @click="() => openModal('modalDelete', p.id)"
              class="bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded">
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

  <div id="modalAddProduct"
    class="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 ">
    <div class="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">

      <div class="flex justify-between p-2">
        <h3 class="text-xl font-normal text-gray-500 pl-2 mt-5 mb-6">Adicionar novo produto</h3>
        <button @click="openModal('modalAddProduct')" type="button"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>

      <div class="p-6 pt-0">
        <div class="flex flex-col gap-6 mb-4">
          <h6
            class="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
            Nome
          </h6>
          <div class="relative h-11 w-full min-w-[200px]">
            <input v-model="this.product.name" type="text" placeholder="Nome do produto"
              class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 disabled:border-0 disabled:bg-blue-gray-50" />
            <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border
                -transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
          </div>
          <h6
            class="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
            Preço
          </h6>
          <div class="relative h-11 w-full min-w-[200px]">
            <input v-model="this.product.price" type="text" placeholder="Preço do produto"
              class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 disabled:border-0 disabled:bg-blue-gray-50" />
            <label
              class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
          </div>
        </div>

        <a href="#" @click="addProduct('modalAddProduct')"
          class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 border-gray-200 font-medium text-base inline-flex items-center px-3 py-2.5 text-center mr-2">
          Cadastrar
        </a>
        <a href="#" @click="openModal('modalAddProduct')"
          class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 border font-medium inline-flex items-center text-base px-3 py-2.5 text-center"
          data-modal-toggle="add-product-modal">
          Cancelar
        </a>
      </div>

    </div>
  </div>

  <div id="modalDelete" class="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 ">
    <div class="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">

      <div class="flex justify-end p-2">
        <button @click="openModal('modalDelete')" type="button"
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
        <a href="#" @click="openModal('modalDelete')"
          class="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center"
          data-modal-toggle="delete-product-modal">
          No, cancel
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
  name: "MainContent",
  data() {
    return {
      title: "Todos os Produtos",
      product: {},
      products: [],
    };
  },
  beforeMount() {
    Security.requireToken();
    this.getProducts();
  },
  methods: {
    getProducts() {
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
    openModal(modalId, productId) {
      this.product.id = productId;
      const modal = document.getElementById(modalId);
      if (modal.style.display === "block") {
        modal.style.display = "none";
      } else {
        modal.style.display = "block";
      }
    },
    confirmDelete() {
      // implement delete product
      console.log('evt', this.product.id);
    },
    addProduct(modalId) {
      const modal = document.getElementById(modalId);
      modal.style.display = "none";

      const payload = {
        name: this.product.name,
        price: parseFloat(this.product.price),
      };

      fetch(`${configs.API_URL}/products`, Security.requestOptions(payload, "POST"))
        .then((response) => response.json())
        .then(({ error, message, data }) => {
          if (error) {
            toast.error(message);
            return;
          } else {
            this.getProducts();
            toast.success("Produto adicionado com sucesso!");
          }
        });
    },
  },

};
</script>