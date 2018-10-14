import Vue from 'vue'
import Router from 'vue-router'
import Main from './pages/Main.vue'
import Login from './pages/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      redirect: '/home',
      component: Main,
      children: [
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
          path: '/home',
          name: 'home',
          component: () => import('./views/Home.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
