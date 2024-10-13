// src/router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';

// Import the components
import Entrance from '../components/Entrance.vue';
import Rooms from '../components/Rooms.vue';
import About from '../components/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/entrance',
    name: 'Entrance',
    component: Entrance,
  },
  {
    path: '/rooms',
    name: 'Rooms',
    component: Rooms,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  // Redirect root to /entrance or any default page
  {
    path: '/',
    redirect: '/entrance',
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
