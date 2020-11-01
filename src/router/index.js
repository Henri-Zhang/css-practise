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
    // 全屏布局
    {
      path: '/layouts/fullscreen/absolute',
      component: () => import('./../layouts/fullscreen/Absolute')
    },
    {
      path: '/layouts/fullscreen/flex',
      component: () => import('./../layouts/fullscreen/Flex')
    },
    // 多列布局
    {
      path: '/layouts/multi-column/two',
      component: () => import('./../layouts/multi-column/Two.flex')
    },
    {
      path: '/layouts/multi-column/three',
      component: () => import('./../layouts/multi-column/Three.float')
    },
    {
      path: '/*',
      component: C404
    }
  ]
});

export default router;
