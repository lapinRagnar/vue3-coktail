import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/public/Home.vue'
import Cocktail from '@/views/public/Cocktail.vue'
import Contact from '@/views/public/Contact.vue'
import NotFound from '@/views/public/NotFound.vue'
import PublicLayout from '@/views/public/Layout.vue'

const routes = [

  {
    path: '/',
    name: 'public',
    component: PublicLayout,
    children: [
      { path: '/', name: 'home', component: Home},
      { path: '/cocktails', name: 'Cocktails', component: Cocktail },
      { path: '/contact', name: 'Contact', component: Contact },
    ]

  },

  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
