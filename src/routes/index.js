import { createRouter, createWebHistory } from 'vue-router'
import MainContent from '../components/MainContent.vue'
import Users from '../components/Users.vue'

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
  }
];

const router = createRouter({history: createWebHistory(), routes});

export default router;