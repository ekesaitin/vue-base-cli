import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'index', component: _ => import('views/index/index'), meta: { title: 'index' } }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  const title = to.meta.title
  if (title) document.title = title
  next()
})

export default router
