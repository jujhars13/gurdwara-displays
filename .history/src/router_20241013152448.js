// src/router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';

// Import the components
import EntrancePage from '../components/EntrancePage.vue';
import RoomsPage from '../components/RoomsPage.vue';
import AboutPage from '../components/AboutPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/entrance',
    name: 'Entrance',
    component: EntrancePage,
  },
  {
    path: '/rooms',
    name: 'Rooms',
    component: RoomsPage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
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
