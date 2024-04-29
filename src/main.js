import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Toast from "vue-toastification";
import router from './routes'

import "vue-toastification/dist/index.css";

createApp(App).use(Toast, {timeout: 2000}).use(router).mount('#app')
