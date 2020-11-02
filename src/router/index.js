import { createRouter, createWebHistory } from 'vue-router';
import Home from './../pages/Home';
import C404 from './../pages/404';
import layouts from './layouts';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    ...layouts,
    {
      path: '/*',
      component: C404
    }
  ]
});

export default router;
