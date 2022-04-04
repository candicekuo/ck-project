import Vue from 'vue';
import VueRouter from 'vue-router';
import ErrorPage from '@/pages/error/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/pages/personal/index.vue'),
    // redirect: '/personal',
    redirect: '/owner/portfolio', // 這頁先關
  },
  {
    path: '/owner',
    component: () => import('@/layouts/mainLayouts.vue'), // @ 代表 /src
    redirect: '/owner/portfolio', // 要自動轉導的目標 = 可設定轉向預設頁面
    children: [
      {
        path: '/',
        // name: 'Portfolio',
        component: () => import('@/pages/portfolio/index.vue'),
        children: [
          {
            path: 'portfolio',
            name: 'Portfolio',
            component: () => import('@/pages/portfolio/list.vue'),

          },
          {
            path: 'pages',
            name: 'ForPortfolio',
            component: () => import('@/pages/portfolio/forPortfolio.vue'),

          },
        ],
      },
      // {
      //   path: 'portfolio/test',
      //   name: 'PortfolioTest',
      //   component: () => import('@/pages/portfolio/gridTest.vue'),
      // },
      {
        // path: 'ckresume',
        path: 'resume',
        name: 'Resume',
        component: () => import('@/pages/resume/index.vue'),
      },
    ],
  },
  {
    path: '*',
    name: 'ErrorPage',
    component: () => import('@/pages/personal/index.vue'),
    // component: () => import('@/pages/error/index.vue'),
    component: ErrorPage,
  },
];

const router = new VueRouter({
  // mode: 'history',
  routes,

  // 解決 spa 路由跳轉 scrollTop 不會在 top 的問題
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
     return savedPosition
    } 
    return { x: 0, y: 0 }
    
  }
});

export default router;
