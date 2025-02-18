<template>
    <nav class="navbar">
      <div class="logo">
        <router-link to="/">HomeMade</router-link>
      </div>
      <ul class="nav-links">
        <li>
          <router-link to="/chefs">Chefs</router-link>
        </li>
        <li v-if="!isLoggedIn">
          <router-link to="/login">Login</router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/cart">Cart ({{ cartItems.length }})</router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  import { useAuthStore } from '../store';
  import { useCartStore } from '../store';
  
  export default {
    computed: {
      isLoggedIn() {
        const authStore = useAuthStore();
        return authStore.isLoggedIn;
      },
      cartItems() {
        const cartStore = useCartStore();
        return cartStore.items;
      },
    },
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: #ff5722;
    color: white;
  }
  
  .navbar .logo {
    font-size: 24px;
  }
  
  .navbar .nav-links {
    display: flex;
    list-style-type: none;
  }
  
  .navbar .nav-links li {
    margin-left: 20px;
  }
  
  .navbar .nav-links a {
    color: white;
    text-decoration: none;
  }
  
  .navbar .nav-links a:hover {
    text-decoration: underline;
  }
  </style>
  