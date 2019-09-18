import Vue from 'vue'
import Router from 'vue-router'
import TheLayout from '@/views/TheLayout.vue'

Vue.use(Router)
const IndexRoute = {
  path: '/',
  component: TheLayout,
  // redirect: '/home',
  children: [
    {
      path: '',
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    }]
}
const routes = [
  IndexRoute,
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  }]

const routerContext = require.context('./', true, /index\.js$/)
routerContext.keys().forEach(route => {
  // 如果是根目录的 index.js 、不处理
  if (route.startsWith('./index')) {
    return
  }
  const routerModule = routerContext(route)
  /**
  * 兼容 import export 和 require module.export 两种规范
  */
  IndexRoute.children = [...IndexRoute.children, ...(routerModule.default || routerModule)]
})

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
