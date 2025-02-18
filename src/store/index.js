import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isLoggedIn: false,
  }),
  actions: {
    login(credentials) {
      localStorage.setItem('user', JSON.stringify(credentials));
      this.user = credentials;
      this.isLoggedIn = true;
    },
    logout() {
      localStorage.removeItem('user');
      this.user = null;
      this.isLoggedIn = false;
    },
    initializeAuth() {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        this.user = JSON.parse(storedUser);
        this.isLoggedIn = true;
      }
    },
  },
});

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),
  actions: {
    addItem(item) {
      this.items.push(item);
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
    clearCart() {
      this.items = [];
    },
  },
});
