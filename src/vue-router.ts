import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// const originalPush: any = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location: any) {
//   return originalPush.call(this, location).catch((err: any) => err)
// }

const files = require.context('./router', true, /\.ts$/)
const modules: Array<RouteRecordRaw> = []
files.keys().forEach(k => {
  if (k === './index.ts') return
  modules.push(files(k).default)
})

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/image'
  },
  ...modules
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    to || from
    if (savedPosition) return savedPosition
    return { left: 0, top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  to || from
  next()
})

router.afterEach(to => {
  to || 1
  window.scrollTo(0, 0)
})

export default router
