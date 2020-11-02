import Layouts from './../pages/Layouts';

export default [
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
  // 圣杯布局
  {
    path: '/layouts/grail',
    component: () => import('./../layouts/grail/Grail')
  },
  // 双飞翼布局
  {
    path: '/layouts/double-wings',
    component: () => import('./../layouts/double-wings/DoubleWings')
  },
  // 均分布局
  {
    path: '/layouts/average',
    component: () => import('./../layouts/average/Average.flex')
  },
  // 水平居中布局
  {
    path: '/layouts/center-horizontally',
    component: () => import('./../layouts/center-horizontally/index')
  },
  // 垂直居中布局
  {
    path: '/layouts/center-vertically',
    component: () => import('./../layouts/center-vertically/index')
  }
];
