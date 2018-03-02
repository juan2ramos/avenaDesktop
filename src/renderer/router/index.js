import Vue from 'vue'
import Auth from '@/store/modules/Auth'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import Send from '@/components/Send.vue'
import Config from '@/components/config.vue'

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
    meta: {isPublic: true}
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {isPublic: true}
  },
  {
    path: '/send',
    name: 'send',
    component: Send,
    meta: {isPublic: false}
  },
  {
    path: '/config',
    name: 'config',
    component: Config,
    meta: {isPublic: true}
  },
  {
    path: '*',
    redirect: '/',
    meta: {isPublic: false}
  }
]
Vue.use(Router)

const isAuthenticated = function () {
  return Auth.state.auth
}

const router = new Router({routes})

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !isAuthenticated()) {
    return next({name: 'login'})
  }
  if (to.name === 'login' && isAuthenticated()) {
    return next({name: 'home'})
  }
  return next()
})
export default router
