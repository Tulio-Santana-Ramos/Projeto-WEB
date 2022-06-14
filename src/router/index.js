import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

/*
Responsável por criar as rotas do site, cada rota tem um arquivo dentro da pasta view que
corresponde ao contéudo mostrado na rota.
*/

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admhome',
      name: 'admhome',
      
      component: () => import('../views/HomeAdmin.vue')
    }, 
    {
      path: '/biblioteca',
      name: 'biblioteca',
    
      component: () => import('../views/Library.vue')
    },
    {
      path: '/login',
      name: 'login',
      
      component: () => import('../views/Login.vue')
    },
    {
      path: '/bookpage',
      name: 'bookpage',
      
      component: () => import('../views/BookView.vue')
    },
    {
      path: '/newuser',
      name: 'newuser',
     
      component: () => import('../views/NewUser.vue')
    },
    {
      path: '/newadmin',
      name: 'newadmin',
      
      component: () => import('../views/NewAdmin.vue')
    },
    {
      path: '/adminspage',
      name: 'adminspage',
     
      component: () => import('../views/AdminsPage.vue')
    },
    {
      path: '/additem',
      name: 'additem',
      
      component: () => import('../views/AddItem.vue')
    },
    {
      path: '/carrinho',
      name: 'carrinho',
      
      component: () => import('../views/Bag.vue')
    },
    {
      path: '/pagamento',
      name: 'pagamento',
      
      component: () => import('../views/Payment.vue')
    },
  ]
})

export default router
