import { createWebHistory, createRouter } from "vue-router";
import ListView from './components/ListView.vue';
import HomeView from './components/HomeView.vue';
import DetailView from './components/DetailView.vue';

const routes = [
  {
    path: "/list",
    component: ListView,
  },
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/detail/:id(\\d+)",
    component: DetailView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 