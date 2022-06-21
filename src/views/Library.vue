<script setup>
import Books from "../components/BigBooks.vue";
import Footer from "../components/Footer.vue";
import Menu from "../components/Menu.vue";
import LoginRequired from "../components/LoginRequired.vue";
import {VueCookieNext} from "vue-cookie-next";
</script>

<!-- Página para visualizar, ler e avaliar todos os livros comprados pelo usuário-->
<template>
  <Menu
      :plotDropDown="true"
      :filter="filterDropdown"
      :actualCategory="this.$route.query.category"
  />

  <h1 class="titlePage">Biblioteca de livros</h1>
  <!-- Verifica se o user está logado, caso não esteja mostra página de LoginRequired-->
  <div v-if="hadUser()" class="books">
    <!-- Verifica se o user possui algum livro comprado-->
    <div v-if="getUserBooks().length === 0">
      Você ainda não comprou nenhum livro :(
    </div>
    <!-- Realiza um for por todos os livros comprados pelo usuário-->
    <div v-else v-for="book in getUserBooks()">
      <Books
          :name="book.name"
          :categories="book.categories"
          :pages="book.pages"
          :id="book.id"
      />
    </div>
  </div>
  <LoginRequired v-else :text="text"></LoginRequired>

  <Footer></Footer>
</template>

<script>
import {VueCookieNext} from "vue-cookie-next";

export default {
  name: "app",
  methods: {
    /**
     * Adiciona as variáveis para a dropdown funcionar
     * @param id
     */
    filterDropdown(id) {
      this.$router.push({path: "/biblioteca", query: {category: id}});
    },
    /**
     * Faz a rota para visualizar as informações do livro
     * @param idLivro
     */
    goToBook(idLivro) {
      this.$router.push({path: "/livro", query: {id: idLivro}});
    },
    /**
     * Verifica se o usuário está logado
     * @returns {boolean}
     */
    hadUser() {
      return VueCookieNext.getCookie("account") !== null;
    },
    /**
     * Retorna todas as categorias
     * @returns {any}
     */
    getAllCategories() {
      return JSON.parse(localStorage.getItem("categories"))
    },
    /**
     * Retorna todos os livros
     * @returns {any}
     */
    getAllBooks() {
      return JSON.parse(localStorage.getItem("books"));
    },
    /**
     * Retorna todos os livros
     * @returns {*[]|*}
     */
    getActualBooks() {
      let temp = [];
      let books = this.getAllBooks();
      if (this.$route.query.category === undefined)
        return books;
      let category = this.$route.query.category;
      for (const book of books) {
        if (book.categories.includes(parseInt(category[0])))
          temp.push(book);
      }
      return temp;
    },
    /**
     * Retorna todos os livros que o usuário tem na biblioteca
     * @returns {*[]}
     */
    getUserBooks() {
      //Define algumas variáveis para a execução do código
      let actualUser = VueCookieNext.getCookie("account");
      let libraries = JSON.parse(localStorage.getItem("libraries"));
      let allCategories = this.getAllCategories();
      let temp = [];
      for (const library of libraries) {// Busca a biblioteca do usuário
        if (library.user === actualUser.id) {
          for (const book of this.getActualBooks()) {//Busca todos os livros do usuário
            for (const bookLib of library.lib) {
              if (parseInt(book.id) === parseInt(bookLib.id)) {
                let tempCategories = [];
                for (const category of book.categories) {//Transforma as categorias de número para texto
                  for (const fixedCategory of allCategories) {
                    if (category === fixedCategory.id) {
                      tempCategories.push(fixedCategory.name);
                      break;
                    }
                  }
                }
                book.categories = tempCategories;
                temp.push(book);
              }
            }
          }
        }
      }
      return temp;
    }
  },
  data() {
    return {
      user: true,
      text: "Para acessar a biblioteca e visualizar seus livros faça o login",
    };
  },

};
</script>

<style scoped>
@import "../assets/base.css";

.titlePage {
  color: #38b6ff;
  margin-top: 150px;
  text-align: center;
}

.books {
  padding: 0 2vw;
  display: flex;
  flex-wrap: wrap;
  min-height: 501px;
}
</style>
