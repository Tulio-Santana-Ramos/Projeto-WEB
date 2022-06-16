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
      path: '/livro',
      name: 'bookpage',
      
      component: () => import('../views/BookView.vue')
    },
    {
      path: '/novousuario',
      name: 'newuser',
     
      component: () => import('../views/NewUser.vue')
    },
    {
      path: '/novoadmin',
      name: 'newadmin',
      
      component: () => import('../views/NewAdmin.vue')
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
      path: '/finalizarCompra',
      name: 'finalizarCompra',

      component: () => import('../views/FinishShop.vue')
    },
    {
      path: '/gerenciamento',
      name: 'gerenciamento',
      
      component: () => import('../views/AdminsPage.vue')
    },
    {
      path: '/test',
      name: 'test',

      component: () => import('../views/Test.vue')
    },
    {
      path: '/resetConfig',
      name: 'resetConfig',

      component: () => import('../views/ResetConfig.vue')
    },
  ]
})

export default router
