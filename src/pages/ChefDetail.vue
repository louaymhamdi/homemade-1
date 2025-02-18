<template>
    <div>
      <h2>{{ chef.name }}</h2>
      <ul>
        <li v-for="dish in chef.dishes" :key="dish.id">
          {{ dish.name }} - ${{ dish.price }}
          <button @click="addToCart(dish)">Add to Cart</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { useCartStore } from '../store';
  
  export default {
    data() {
      return {
        chef: {
          name: 'Chef John',
          dishes: [
            { id: 1, name: 'Spaghetti', price: 10 },
            { id: 2, name: 'Salad', price: 7 },
          ],
        },
      };
    },
    methods: {
      addToCart(dish) {
        const cartStore = useCartStore();
        cartStore.addItem(dish);
      },
    },
  };
  </script>
  
  <style scoped>
  h2 {
    color: #ff5722;
  }
  button {
    background-color: #ff5722;
    color: white;
    padding: 5px 10px;
  }
  </style>
  