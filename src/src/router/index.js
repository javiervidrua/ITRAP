import Vue from 'vue'
import VueRouter from 'vue-router'
import QuickAudit from '../views/QuickAudit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'QuickAudit',
    component: QuickAudit
  },
  {
    path: '/completeriskaudit',
    name: 'CompleteRiskAudit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CompleteRiskAudit.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
