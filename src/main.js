import { createApp } from 'vue';
// import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import router from './router';
// import HomeView from './components/Header.vue';

// const router = createRouter({
//   routes: [{
//     path: '/about',
//     component: HomeView
//   }],
//   history: createWebHistory()
// })

const app = createApp(App)
app.use(router)
app.mount('#app')