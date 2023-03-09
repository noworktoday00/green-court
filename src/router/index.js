import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/frontPage/HomeView.vue'),
    children: [
      {
        path: '',
        name: 'landing',
        component: () => import('../views/frontPage/LandingView.vue'),
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/frontPage/AboutView.vue'),
      },
      {
        path: '/level',
        name: 'level',
        component: () => import('../views/frontPage/LevelView.vue'),
      },
      {
        path: '/activities',
        name: 'activities',
        component: () => import('../views/frontPage/ActivityView.vue'),
      },
      {
        path: '/coach',
        name: 'coach',
        component: () => import('../views/frontPage/CoachView.vue'),
      },
      {
        path: '/racket',
        name: 'racket',
        component: () => import('../views/frontPage/RacketView.vue'),
      },
      {
        path: '/activities/:productId',
        component: () => import('../views/frontPage/DetailView.vue'),
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('../views/frontPage/CartView.vue'),
      },
      {
        path: '/order/:orderId',
        component: () => import('../views/frontPage/CheckOrder.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/dashboard/DashboardView.vue'),
    children: [
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/dashboard/ProductsView.vue'),
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('../views/dashboard/OrderView.vue'),
      },
      {
        path: 'coupons',
        name: 'coupons',
        component: () => import('../views/dashboard/CouponView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
