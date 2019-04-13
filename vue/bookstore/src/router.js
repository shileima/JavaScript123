import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass:'active',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('+/index.vue'),
      children:[
        {
          path: '/home',
          name: 'home',
          component: () => import('+/home/index.vue')
        },
        {
          path: '/list',
          name: 'list',
          component: () => import('+/list/index.vue')
        },
        {
          path: '/collect',
          name: 'collect',
          component: () => import('+/collect/index.vue')
        },
        {
          path: '/add',
          name: 'add',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('+/add/index.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
  ]
})
