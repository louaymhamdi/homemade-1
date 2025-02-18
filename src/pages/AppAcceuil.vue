<template>
  <div>
    <h1>Welcome to HomeMade</h1>
    <p>we don't have a lot of products but damn are they delicous</p>
    <router-link to="/chefs">Browse Chefs</router-link>
  </div>
</template>

<script>
export default {
  name: 'AppAcceuil',  
};
</script>

<style scoped>
h1 {
  color: #ff5722;
}
</style>
