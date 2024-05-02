<template>
  <div class="container my-6 mx-auto">
    <div class="flex justify-center items-center">
      <div class="relative flex flex-col text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
        <h4 class="block font-sans text-4xl antialiased mt-6 font-semibold leading-snug tracking-normal text-blue-gray-900">
          Olá, {{ store.user.name }} 👋
        </h4>
        <form @submit.prevent="submitHandler" class="max-w-screen-lg mt-28 mb-2 w-96 sm:w-96">
          <div class="flex flex-col gap-6 mb-1">
            <h6
              class="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
              Nome
            </h6>
            <div class="relative h-11 w-full min-w-[200px]">
              <input v-model="name" type="name"
                class="peer h-full w-full border border-blue-gray-700 !border-t-blue-gray-700 px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline-none transition-all " />
              <label
                class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
            </div>
            <h6
              class="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
              Email
            </h6>
            <div class="relative h-11 w-full min-w-[200px]">
              <input v-model="email" type="email"
                class="peer h-full w-full border border-blue-gray-700 !border-t-blue-gray-700 px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline-none transition-all" />
              <label
                class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
            </div>
            <h6
              class="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
              Senha
            </h6>
            <div class="relative h-11 w-full min-w-[200px]">
              <input v-model="password" type="password" placeholder="Deixe em branco para manter a mesma senha."
                class="peer h-full w-full border border-blue-gray-700 !border-t-blue-gray-700 px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline-none transition-all" />
                <label
                class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
            </div>
          </div>
          <button
            class="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit">
            Alterar
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { configs } from '@/configs';
import { Security } from '@/request/security';
import { store } from '@/store'
import { useToast } from 'vue-toastification';

const toast = useToast();

export default {
  name: "User",
  data() { 
    return {
      name: "",
      email: "",
      password: "",
      store,
    };
  },
  beforeMount() {
    Security.requireToken();
    this.getUser();
  },
  methods: {
    getUser() {
      fetch(`${configs.API_URL}/users/${store.user.id}/me`, Security.requestOptions(null))
        .then((response) => response.json())
        .then(({ error, message, data }) => {
          if (error) {
            toast.error(message);
            return;
          }
          this.name = data.name;
          this.email = data.email;
        })
    }
  }
}
</script>