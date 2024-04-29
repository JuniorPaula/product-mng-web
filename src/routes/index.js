import { createRouter, createWebHistory } from 'vue-router'
import MainContent from '../components/MainContent.vue'
import Users from '../components/Users.vue'
import Login from '../components/Login.vue'

const routes = [
  {
    path: '/',
    name: 'MainContent',
    component: MainContent
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
];

const router = createRouter({history: createWebHistory(), routes});

export default router;