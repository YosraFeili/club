import Vue from 'vue'
import VueRouter from 'vue-router'
import club from '@/views/club/Club'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'club',
    component: club
  },
  { path: '/football', component: () => import('../views/football/FootballHome'), name: 'football-home' },
  { path: '/qa', component: () => import('../views/question-answer/QuestionAnswer'), name: 'qa' },
  { path: '/purchase', component: () => import('../views/purchase/Purchase'), name: 'purchase' },
  { path: '/marathon', component: () => import('../views/marathon/MarathonHome'), name: 'marathon' },
  { path: 'prize', component: () => import('../views/prize/Prize'), name: 'get-prize' },
  { path: 'history', component: () => import('../views/history/LotteryHistory'), name: 'lottery-history' },
  { path: 'history', component: () => import('../views/history/ScoreHistory'), name: 'score-history' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
