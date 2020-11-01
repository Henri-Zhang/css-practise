import { createRouter, createWebHistory } from 'vue-router';
import Layouts from './../pages/Layouts';
import Home from './../pages/Home';
import C404 from './../pages/404';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    {
      path: '/layouts',
      component: Layouts
    },
    {
      path: '/layouts/fullscreen/absolute',
      component: () => import('./../layouts/fullscreen/Absolute')
    },
    {
      path: '/layouts/fullscreen/flex',
      component: () => import('./../layouts/fullscreen/Flex')
    },
    {
      path: '/*',
      component: C404
    }
  ]
});

export default router;
