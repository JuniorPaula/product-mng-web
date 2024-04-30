import { createRouter, createWebHistory } from 'vue-router'
import { Security } from '../request/security'
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

// check token on every route change
router.beforeEach(async (to, from, next) => {
  const checkToken = await Security.checkToken();
  to.path === "/login" ? next() : checkToken ? next() : router.push("/login");
});

export default router;