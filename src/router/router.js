import Layout from '@/views/layout/index.vue'
import Login from '@/views/login/index.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error-page/404'),
  },
  {
    path: '/',
    name: 'Layout',
    redirect: '/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Home',
        component: () => import('@/views/home/index'),
      },
    ],
  },
]

export default routes
