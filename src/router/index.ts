import Home from '@/components/homepage/homepage.vue'
import { createRouter, createWebHistory } from 'vue-router' //vue3的导入router的方式
const routerHistory = createWebHistory(import.meta.env.BASE_URL)
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})

export default router
