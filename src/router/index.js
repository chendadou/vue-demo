import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'

/**
 * 几点说明：
 * 1. required
 *    path: 路由路径
 *    component: 路由路径对应的路由组件
 * 2. name: 路由名称
*/

const routes = [
  {
    path: '/',
    name: 'Start',
    component: StartView,
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'About',

    // 按需加载，节约性能。
    // 若没有访问 /about，则不会加载 AboutView 这个组件
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import('../views/DemoView.vue'),
  },
  {
    path: '/demo/query',
    name: 'Query',
    component: () => import('../views/QueryView.vue'),
  },
  {
    path: '/demo/params/:name/:age/:obj',
    name: 'Params',
    component: () => import('../views/ParamsView.vue'),
  },
]

// 创建路由对象
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

/**
 * createWebHashHistory：url 上多了个 #
 * createWebHisttory：url 上没有 #
 * 
 * 比如本地访问 /
 * 前者表现为：http://localhost:8080/#/
 * 后者表现为：http://localhost:8080
*/

export default router
