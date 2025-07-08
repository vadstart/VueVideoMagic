import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import GhostHunt from './views/GhostHunt.vue';

export const projectRoutes = [
  { path: '/GhostHunt', component: GhostHunt },
];

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  ...projectRoutes,
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
