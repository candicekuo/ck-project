import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ErrorPage from '@/pages/error/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/personal',
    component: () => import('@/layouts/mainLayouts.vue'),
  },
  {
    path: '/owner',
    component: () => import('@/layouts/mainLayouts.vue'), // @ 代表 /src
    redirect: '/owner/portfolio', // 要自動轉導的目標 = 可設定轉向預設頁面
    children: [
      {
        path: 'portfolio',
        name: 'Portfolio',
        component: () => import('@/pages/portfolio/index.vue'),
      },
      {
        path: 'ckresume',
        name: 'Resume',
        component: () => import('@/pages/resume/index.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    name: 'ErrorPage',
    // component: () => import('@/pages/error/index.vue'),
    component: ErrorPage,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
