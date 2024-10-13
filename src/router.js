// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Rooms from './pages/Rooms.vue';
import Entrance from './pages/Entrance.vue';
import About from './pages/About.vue';

const routes = [
  {
    path: '/rooms',
    name: 'Rooms',
    component: Rooms,
  },
  {
    path: '/entrance',
    name: 'Entrance',
    component: Entrance,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/',
    redirect: '/entrance',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
