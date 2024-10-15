// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import RoomsPage from './pages/Rooms.vue';
import EntrancePage from './pages/Entrance.vue';
import HomePage from './pages/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/entrance',
    name: 'Entrance',
    component: EntrancePage,
  },
  {
    path: '/rooms/:queryParams(.*)',
    name: 'Rooms',
    component: RoomsPage,
    props: true,
  },
];

const router = createRouter(
  {
  publicPath: '/',
  history: createWebHistory(),
  routes,
}
);

export default router;
