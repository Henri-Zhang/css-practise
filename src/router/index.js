import { createRouter, createWebHistory } from 'vue-router';
import Layouts from './../pages/Layouts';
import Home from './../pages/Home';
import C404 from './../pages/404';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/layouts', component: Layouts },
    {
      path: '/*',
      component: C404
    }
  ]
});

export default router;
