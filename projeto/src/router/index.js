import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

/**
 * Responsável por criar as rotas do site, cada rota tem um arquivo na pasta view que
 * corresponde ao conteudo mostrado na rota.
 */

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [
        /**
         * Rota para a pagina principal da loja
         */
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        /**
         * Rota para a pagina da biblioteca do usuario
         */
        {
            path: '/biblioteca',
            name: 'biblioteca',

            component: () =>
                import ('../views/Library.vue')
        },
        /**
         * Rota para a pagina de login
         */
        {
            path: '/login',
            name: 'login',

            component: () =>
                import ('../views/Login.vue')
        },
        /**
         * Rota para visualizar as informações do livro
         */
        {
            path: '/livro',
            name: 'bookpage',

            component: () =>
                import ('../views/BookView.vue')
        },
        /**
         * Rota para criar um usuário
         */
        {
            path: '/novousuario',
            name: 'newuser',

            component: () =>
                import ('../views/NewUser.vue')
        },
        /**
         * Rota para criar um administrador
         */
        {
            path: '/novoadmin',
            name: 'newadmin',

            component: () =>
                import ('../views/NewAdmin.vue')
        },
        /**
         * Rota para adicionar um novo item ao banco de dados
         */
        {
            path: '/additem',
            name: 'additem',

            component: () =>
                import ('../views/AddItem.vue')
        },
        /**
         * Rota para visualizar o carrinho de compras
         */
        {
            path: '/carrinho',
            name: 'carrinho',

            component: () =>
                import ('../views/Bag.vue')
        },
        /**
         * Rota para finalizar a compra
         */
        {
            path: '/finalizarCompra',
            name: 'finalizarCompra',

            component: () =>
                import ('../views/FinishShop.vue')
        },
        /**
         * Rota para o administrador visualizar os dados mais importantes
         */
        {
            path: '/gerenciamento',
            name: 'gerenciamento',

            component: () =>
                import ('../views/AdminsPage.vue')
        },
        /**
         * Rota para cadastrar uma nova senha
         */
        {
            path: '/novachave',
            name: 'novachave',

            component: () =>
                import ('../views/NewKey.vue')
        },
        /**
         * Rota usada para redefinir as configurações do servidor
         */
        {
            path: '/resetConfig',
            name: 'resetConfig',

            component: () =>
                import ('../views/ResetConfig.vue')
        },
        /**
         * Rota para abrir a visualização do livro
         */
        {
            path: '/lerLivro',
            name: 'lerLivro',

            component: () =>
                import ('../views/ReadBook.vue')
        },
        {
            path: '/test',
            name: 'test',

            component: ()=>
                import('../views/Test.vue')
        }
    ]
})

export default router