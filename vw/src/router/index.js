import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import banner from '@/components/Banner'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },

    {
      path: '/banner',
      name: 'banner',
      component: banner
    }

  ]
})
