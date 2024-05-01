import { createRouter, createWebHistory } from 'vue-router'
import { Security } from '../request/security'
import MainContent from '../components/MainContent.vue'
import Users from '../components/Users.vue'
import UserEdit from '../components/UserEdit.vue'
import Login from '../components/Login.vue'
import Product from '../components/Product.vue'

const routes = [
  {
    path: '/',
    name: 'MainContent',
    component: MainContent
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/user/:userId',
    name: 'UserEdit',
    component: UserEdit
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