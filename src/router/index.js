import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Club from '@/views/club/Club'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/club',
    name: 'club',
    component: Club,
    children: [
      { path: 'prize', component: () => import('../views/prize/Prize'), name: 'get-prize' },
      { path: 'history', component: () => import('../views/history/LotteryHistory'), name: 'lottery-history' },
      { path: 'history', component: () => import('../views/history/ScoreHistory'), name: 'score-history' }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
