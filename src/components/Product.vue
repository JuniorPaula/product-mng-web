<template>
  <div class="text-center">
    <h2 class="text-3xl font-medium mt-8 text-gray-700">Atualizar Produto</h2>
  </div>
  <div class="max-w-md mx-auto mt-8">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Nome:
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name" type="text" placeholder="Nome" v-model="this.product.name">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="price">
          Preço:
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="price" type="text" placeholder="Preço" v-model="this.product.price">
      </div>
      <div class="flex items-center justify-between">
        <button @click.prevent="update"
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
          type="button">
          Atualizar
        </button>
        <router-link to="/"
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
          type="button">
          Voltar
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { configs } from '@/configs';
import { Security } from '@/request/security';
import { useToast } from 'vue-toastification';

const toast = useToast();

export default {
  name: "Product",
  data() {
    return {
      product: {
        name: "",
        price: ""
      }
    };
  },
  beforeMount() {
    Security.requireToken();
    this.getProduct();
  },
  methods: {
    getProduct() {
      fetch(`${configs.API_URL}/products/${this.$route.params.id}`, Security.requestOptions(null))
        .then((response) => response.json())
        .then(({ error, message, data }) => {
          if (error) {
            toast.error(message);
            return;
          }
          this.product.name = data.name;
          this.product.price = data.price;
        })
    },
    update() {
      const payload = {
        name: this.product.name,
        price: parseFloat(this.product.price)
      };
      
      fetch(`${configs.API_URL}/products/${this.$route.params.id}`, Security.requestOptions(payload, "PUT"))
        .then((response) => response.json())
        .then(({ error, message }) => {
          if (error) {
            toast.error(message);
            return;
          }
          toast.success("Produto atualizado com sucesso!");
          this.$router.push("/");
        });
    }
  }
}
</script>