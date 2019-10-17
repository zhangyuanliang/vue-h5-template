import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo',
      component: () => import('@/views/demo/index'),
      // component: () => import('@/components/demo'),
      meta: { title: '测试页面' }
    }
  ]
})
