import Vue from 'vue';
import VueRouter from 'vue-router';
import ErrorPage from '@/pages/error/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/pages/personal/index.vue'),
    // redirect: '/personal',
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
        path: 'portfolio/test',
        name: 'PortfolioTest',
        component: () => import('@/pages/portfolio/gridTest.vue'),
      },
      {
        path: 'ckresume',
        name: 'Resume',
        component: () => import('@/pages/resume/index.vue'),
      },
    ],
  },
  {
    path: '*',
    name: 'ErrorPage',
    // component: () => import('@/pages/error/index.vue'),
    component: ErrorPage,
  },
];

const router = new VueRouter({
  // mode: 'history',
  routes,
});

export default router;
