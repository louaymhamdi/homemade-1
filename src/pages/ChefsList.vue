<template>
    <div>
      <h2>Our Renowned Chefs</h2>
      <ul>
        <li v-for="chef in chefs" :key="chef.id">
          <router-link :to="`/chef/${chef.id}`">{{ chef.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        chefs: [
          { id: 1, name: 'Chef lou' },
          { id: 2, name: 'Chef houss' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
  }
  li {
    margin: 10px 0;
  }
  </style>
  