import { createRouter, createWebHistory } from 'vue-router'
export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/views/main.vue')
  },
  {
    path: '/release/:id',
    component: () => import('@/views/release/Release.vue')
  },
  {
    path: '/example/:num',
    component: () => import('@/views/release/SetExample.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes
})

export default router
