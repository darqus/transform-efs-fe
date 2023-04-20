import { type RouteRecordRaw, } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: async () => await import('layouts/MainLayout.vue'),
    children: [ { path: '', component: async () => await import('pages/IndexPage.vue'), }, ],
    meta: {
      requiredAuth: true,
    },
  },
  {
    path: '/register',
    component: async () => await import('layouts/MainLayout.vue'),
    children: [ { path: '', component: async () => await import('pages/RegisterPage.vue'), }, ],
  },
  {
    path: '/login',
    component: async () => await import('layouts/MainLayout.vue'),
    children: [ { path: '', component: async () => await import('pages/LoginPage.vue'), }, ],
  },
  {
    path: '/forgot',
    component: async () => await import('layouts/MainLayout.vue'),
    children: [ { path: '', component: async () => await import('pages/ForgotPage.vue'), }, ],
  },
  {
    path: '/account',
    component: async () => await import('layouts/MainLayout.vue'),
    children: [ { path: '', component: async () => await import('pages/AccountPage.vue'), }, ],
    meta: {
      requiredAuth: true,
    },
  },
  {
    path: '/monitoring',
    component: async () => await import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: async () => await import('pages/MonitoringPage.vue'), },
    ],
    meta: {
      requiredAuth: true,
    },
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/access-deny',
    component: async () => await import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: async () => await import('pages/ErrorAccessDeny.vue'), },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: async () => await import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: async () => await import('pages/ErrorNotFound.vue'), },
    ],
  },
]

export default routes
