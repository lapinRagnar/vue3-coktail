import { createRouter, createWebHistory } from 'vue-router'

import { Home, Cocktail, Contact, NotFound, PublicLayout} from '@/views/public'

import { AdminLayout, Dashboard, UserIndex, UserEdit, UserAdd, CocktailIndex, CocktailEdit } from '@/views/admin'

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
