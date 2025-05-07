import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/camera',
      name: 'Camera',
      component: () => import('@/pages/CameraPage.vue'),
    },
    {
      path: '/config',
      name: 'UserConfig',
      component: () => import('@/pages/UserConfigPage.vue'),
    },
    {
      path: '/edit',
      name: 'ReceiptEdit',
      component: () => import('@/pages/ReceiptEditPage.vue'),
    },
    {
      path: '/result',
      name: 'Result',
      component: () => import('@/pages/ResultPage.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/LoginPage.vue'),
    },
  ],
})

export default router
