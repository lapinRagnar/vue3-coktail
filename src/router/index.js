import { createRouter, createWebHistory } from 'vue-router'

import * as Public from '@/views/public'

import * as Admin from '@/views/admin'

import Login from '@/views/auth/Login.vue'
import { LogoutComponent } from '@/views/auth/Logout'

import { authGuard } from '@/_helpers/auth-guard'



const routes = [

  {
    path: '/',
    name: 'public',
    component: Public.PublicLayout,
    children: [
      { path: '/', name: 'home', component: Public.Home},
      { path: '/cocktails', name: 'Cocktails', component: Public.Cocktail },
      { path: '/contact', name: 'Contact', component: Public.Contact },
    ]

  },

  {
    path: '/admin',
    name: 'admin',
    component: Admin.AdminLayout,
    children: [
      { path: 'dashboard', name: 'dashboard', component: Admin.Dashboard },

      { path: 'users/index', name: 'uList', component: Admin.UserIndex },
      { path: 'user/edit/:id(\\d+)', name: 'uEdit', component: Admin.UserEdit, props: true },
      { path: 'user/add', name: 'useradd', component: Admin.UserAdd },

      { path: 'cocktails/index', name: 'cList', component: Admin.CocktailIndex },
      { path: 'cocktail/edit/:id(\\d+)?', name: 'cEdit', component: Admin.CocktailEdit, props: true },
    ]
  },

  {
    path: '/login',
    name: 'login',
    component: Login,
  },

  {
    path: '/logout',
    name: 'logout',
    component: LogoutComponent,
  },

  {
    path: '/:pathMatch(.*)*',
    component: Public.NotFound
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

router.beforeEach((to, from, next) => {
  // console.log(to, from)
  console.log(to.matched[0].name)
  if (to.matched[0].name == 'admin') {
    console.log("pas de token, pas admin");
    authGuard()
  }
  next()
})

export default router
