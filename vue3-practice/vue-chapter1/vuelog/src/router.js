import { createWebHistory, createRouter } from "vue-router";
import ListView from './components/ListView.vue';
import HomeView from './components/HomeView.vue';
import DetailView from './components/DetailView.vue';
import AuthorView from './components/AuthorView.vue';
import CommentView from './components/CommentView.vue';

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
    path: "/detail/:id",
    component: DetailView,
    children: [
      {
        path: "author",
        component: AuthorView,
      },
      {
        path: "comment",
        component: CommentView,
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 