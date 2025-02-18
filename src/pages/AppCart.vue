<template>
    <div class="cart">
      <h2>Your Cart</h2>
      <ul>
        <li v-for="(item, index) in cartItems" :key="index">
          {{ item.name }} - ${{ item.price }}
          <button @click="removeItem(index)">Remove</button>
        </li>
      </ul>
      <p v-if="cartItems.length === 0">Your cart is empty.</p>
    </div>
  </template>
  
  <script>
  import { useCartStore } from '../store';
  
  export default {
    computed: {
      cartItems() {
        const cartStore = useCartStore();
        return cartStore.items;
      },
    },
    methods: {
      removeItem(index) {
        const cartStore = useCartStore();
        cartStore.removeItem(index);
      },
    },
  };
  </script>
  
  <style scoped>
  .cart {
    padding: 20px;
  }
  .cart ul {
    list-style-type: none;
  }
  .cart li {
    margin-bottom: 10px;
  }
  .cart button {
    margin-left: 10px;
    background-color: red;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
  </style>
  