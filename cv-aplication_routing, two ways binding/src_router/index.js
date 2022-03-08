import { createRouter, createWebHashHistory } from 'vue-router'
import IntroductionPage from '../views/IntroductionPage.vue'
import View from '../views/View.vue'

const routes = [
  { path: '/introductionpage',
  component:IntroductionPage
},
{ path: '/',
  component:IntroductionPage
},
{ path: '/view',
component:View
},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
