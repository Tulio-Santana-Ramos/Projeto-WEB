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
    <div v-if="user_books.length === 0">
      Você ainda não comprou nenhum livro :(
    </div>
    <!-- Realiza um for por todos os livros comprados pelo usuário-->
    <div v-else v-for="book in user_books">
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
import axios from "axios";

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
      return this.categories
    },
    /**
     * Retorna todos os livros
     * @returns {any}
     */
    getAllBooks() {
      return this.all_books;
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
        if (book.categories.includes(parseInt(category)))
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
      let allCategories = this.getAllCategories();
      let temp = [];

      for (const book of this.getActualBooks()) {//Busca todos os livros do usuário
        for (const bookLib of this.library.lib) {
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
      return temp;
    }
  },
  async mounted() {
    const res_books = await axios.get("http://localhost:3000/api/book/");
    this.all_books = res_books.data;
    const res_cat = await axios.get("http://localhost:3000/api/category/");
    this.categories = res_cat.data;
    let actualUser = VueCookieNext.getCookie("account")
    console.log(actualUser);
    console.log("http://localhost:3000/api/lib/id="+actualUser.id)
    if(actualUser !== ''){
      const res_lib = await axios.get("http://localhost:3000/api/lib/id="+actualUser.id);
      this.library = res_lib.data;
      let allCategories = this.getAllCategories();
      let temp = [];
      console.log(this.getActualBooks())
      console.log(this.library.lib)
      for (const book of this.getActualBooks()) {//Busca todos os livros do usuário
        for (const bookLib of this.library.lib) {
          if (parseInt(book.id) === parseInt(bookLib.id)) {
            console.log(book)
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
      this.user_books = temp;
      console.log("A",this.user_books);
    }
  },
  data() {
    return {
      user: true,
      text: "Para acessar a biblioteca e visualizar seus livros faça o login",
      all_books:[],
      categories: [],
      library:[],
      user_books:[]
    };
  }

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
