import HomeView from '../components/Home.vue';
import ChatView from '../components/Chat.vue';
import BlogView from '../components/Blog.vue';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    component: HomeView
  },
  {
    path: '/chat',
    component: ChatView
  },
  {
    path: '/blog',
    component: BlogView
  }],
});

export default router;