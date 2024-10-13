// src/main.js
import Vue from 'vue';
import App from './App.vue';
import router from './router'; // Import the router

Vue.config.productionTip = false;

new Vue({
  router, // Add the router here
  render: (h) => h(App),
}).$mount('#app');
