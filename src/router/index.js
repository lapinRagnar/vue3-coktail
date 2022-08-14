import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/public/Home.vue'
import Cocktail from '@/views/public/Cocktail.vue'
import Contact from '@/views/public/Contact.vue'
import NotFound from '@/views/public/NotFound.vue'
import PublicLayout from '@/views/public/Layout.vue'

import AdminLayout from '@/views/admin/Layout.vue'
import Dashboard from '@/views/admin/Dashboard.vue'

import UserIndex from '@/views/admin/users/UserIndex.vue'
import UserEdit from '@/views/admin/users/UserEdit.vue'
import UserAdd from '@/views/admin/users/UserAdd.vue'

import CocktailIndex from '@/views/admin/cocktail/CocktailIndex.vue'
import CocktailEdit from '@/views/admin/cocktail/CocktailEdit.vue'

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
    path: '/admin',
    name: 'admin',
    component: AdminLayout,
    children: [
      { path: 'dashboard', name: 'dashboard', component: Dashboard },

      { path: 'users/index', name: 'userindex', component: UserIndex },
      { path: 'user/edit/:id', name: 'useredit', component: UserEdit },
      { path: 'user/add', name: 'useradd', component: UserAdd },
      
      { path: 'cocktails/index', name: 'cocktailindex', component: CocktailIndex },
      { path: 'cocktail/edit', name: 'cocktailedit', component: CocktailEdit },
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
