<template>
    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import { useAuthStore } from '../store';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      handleLogin() {
        const credentials = { email: this.email, password: this.password };
        const authStore = useAuthStore();
        authStore.login(credentials);
        this.$router.push('/');  
      },
    },
  };
  </script>
  
  <style scoped>
  .login {
    padding: 20px;
  }
  input {
    margin: 10px 0;
    padding: 10px;
    width: 100%;
  }
  button {
    background-color: #ff5722;
    color: white;
    padding: 10px 20px;
  }
  </style>
  