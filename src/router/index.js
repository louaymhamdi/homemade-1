import { createRouter, createWebHistory } from 'vue-router';
import AppLogin from '../pages/AppLogin.vue'; // Updated import
import ChefsList from '../pages/ChefsList.vue';
import ChefDetail from '../pages/ChefDetail.vue';
import AppCart from '../pages/AppCart.vue'; // Updated import
import AppAcceuil from '../pages/AppAcceuil.vue';

const routes = [
  {
    path: '/',
    name: 'Acceuil',
    component: AppAcceuil,  // Updated component
  },
  {
    path: '/login',
    name: 'Login',
    component: AppLogin,  // Updated component
  },
  {
    path: '/chefs',
    name: 'ChefsList',
    component: ChefsList,
  },
  {
    path: '/chef/:id',
    name: 'ChefDetail',
    component: ChefDetail,
    props: true,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: AppCart,  // Updated component
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
