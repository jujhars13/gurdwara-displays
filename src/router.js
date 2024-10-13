// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import RoomsPage from './pages/Rooms.vue';
import EntrancePage from './pages/Entrance.vue';
import HomePage from './pages/Home.vue';

const routes = [
  {
    path: '/rooms',
    name: 'Rooms',
    component: RoomsPage,
  },
  {
    path: '/entrance',
    name: 'Entrance',
    component: EntrancePage,
  },
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
