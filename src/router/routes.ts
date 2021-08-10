import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/dashboard', component: () => import('pages/Dashboard.vue') },
      { path: '/transaction', component: () => import('pages/Transaction.vue') },
      { path: '/sales', name: 'PageSales', component: () => import('pages/Sales.vue') },
      { path: '/customerslist', name: 'PageCustomer', component: () => import('pages/CustomerList.vue') },
      { path: '/products', name: 'PageProducts', component: () => import('pages/Products.vue') },
      { path: '/addTransaction', name: 'PageAddTransaction', component: () => import('pages/AddTransaction.vue') },
    ],
  },
  
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
