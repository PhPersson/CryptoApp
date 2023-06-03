import { createWebHistory, createRouter } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import CryptoNews from '@/views/CryptoNews.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage},
  { path: '/news', name: 'News', component: CryptoNews},
  { path: "/:catchAll(.*)", name: "NotFound", component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;