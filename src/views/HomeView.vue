<script setup>
import Books from '@/components/Books.vue'
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";
import AdminMenu from "@/components/AdminMenu.vue";
</script>

<!-- Página feita como home do sistema, através dela é possível visualizar todos os livros do sistema
e navegar para realizar as ações possíveis do usuário seja ele admin ou user padrão-->

<template>
  <div style="overflow: hidden">
  <!-- Verifica se usuário é admin e de acordo com os privilegios de acesso mostra menu de admin
  ou de usuário padrão-->
  <AdminMenu v-if="isAdmin()"
             :plotDropDown="true"
             :filter="filterDropdown"
             :actualCategory="this.$route.query.category"
  />
  <Menu v-else
        :plotDropDown="true"
        :filter="filterDropdown"
        :actualCategory="this.$route.query.category"
  />
  <div class="books">
    <!-- Realiza um for por todos os livros registrado no sistema e os mostra para o usuário-->
    <div v-for="book in paginate()" @click="goToBook(book.id)">
      <Books
          :name="book.name"
          :price="book.price"
          :categories="book.categories"
          :promotion="book.promo"
          :id="book.id"
      />
    </div>
  </div>

  <!-- Realiza a paginação do sistema de acordo com o número de livros que o sistema possui -->
  <div style="width: 100%">
    <paginate
        v-model="page"
        :page-count="getNumPages()"
        :container-class="pagination_class"
        :initial-page="getActualPage()"
        :prev-text="prev_text"
        :next-text="next_text"
        :click-handler="changePage"
        style="position: relative;bottom: 0;left: calc(100% - 270px); width: 100%;"
    />
  </div>

  <!-- Chama o component do footer -->
  <Footer/>
  </div>
</template>

<script>
import Paginate from 'vuejs-paginate-next';
import {VueCookieNext} from "vue-cookie-next";
const maxBooks = 15; //define a quantidade máxima de livros que será mostrada por página
export default {
  components: {
    paginate: Paginate,//Guarda as variáveis para poder usar a paginação corretamente
  },
  name: 'app',
  /**
   * Define a categoria a ser buscada
   */
  mounted() {
    if (this.$route.query.category !== undefined)
      this.actualCategory = this.$route.query.category;
  },
  methods: {
    /**
     * Define uma variável de URL para realizar a busca pelo dropdown
     * @param id
     */
    filterDropdown(id) {
      this.$router.push({path: "/", query: {category: id}});
    },
    /**
     * Define a rota para buscar o livro
     * @param idLivro
     */
    goToBook(idLivro) {
      this.$router.push({path: "/livro", query: {id: idLivro}});
    },
    /**
     * Usado para fazer a paginação da home
     * @returns {number}
     */
    getActualPage() {
      if (this.$route.query.page <= this.getNumPages())
        return parseInt(this.$route.query.page);
      return 1;
    },
    /**
     * Retorna quantas paginas é usada na paginação
     * @returns {number}
     */
    getNumPages() {
      return (Math.ceil(this.getActualBooks().length / maxBooks));
    },
    /**
     * Muda a pagina usando o paginador e a categoria como base
     * @param numPage
     */
    changePage(numPage) {
      if (this.$route.query.category !== null) {
        this.$router.push({path: "/", query: {category: this.$route.query.category, page: numPage}});
        return;
      }
      this.$router.push({path: "/", query: {page: numPage}});
    },
    /**
     * Retorna todos os livros da base
     * @returns {any}
     */
    getAllBooks() {
      return JSON.parse(localStorage.getItem("books"));
    },
    /**
     * Retorna todas as categorias
     * @returns {any}
     */
    getAllCategories() {
      return JSON.parse(localStorage.getItem("categories"))
    },
    /**
     * Corta os livros para fazer a paginação corretamente e retorna esse corte
     */
    paginate() {
      //Define alguns parâmetros para a execução do código
      let books = this.getActualBooks();
      let allCategories = this.getAllCategories();
      let temp = [];
      let page = this.$route.query.page;
      if (page === undefined)//Se não tem pagina definida define para 1
        page = 1;
      else {//Se a pagina é invalida manda para a home sem parametros
        if (page <= 0 || this.$route.query.page > books.length)
          this.$router.push("/");
      }
      page--;//Diminui em 1 para usar como index
      for (let i = maxBooks * page; (i < maxBooks * (page + 1)) && (i < books.length); i++) {//for entre os livros que vão ser exibidos na pagina atual do paginador
        let tempCategories = [];
        let book = books[i];
        for (let j = 0; j < book.categories.length; j++) { // Passa as categorias de número para texto
          let category = book.categories[j];
          for (const fixedCategory of allCategories) {
            if (category === fixedCategory.id) {
              tempCategories.push(fixedCategory.name);
              break;
            }
          }
        }
        if (tempCategories.length !== 0) {
          temp.push(books[i]);
          temp[temp.length - 1].categories = tempCategories;
        }
      }
      return temp;
    },
    /**
     * Retorna todos os livros
     */
    getActualBooks() {
      let temp = [];
      let books = this.getAllBooks();
      if (this.$route.query.category === undefined || parseInt(this.$route.query.category) === -2)
        return books;
      let category = this.$route.query.category;
      for (const book of books) {
        if (book.categories.includes(parseInt(category)))
          temp.push(book);
      }
      return temp;
    },
    /**
     * Valida se é um administrador ou não
     * @returns {boolean}
     */
    isAdmin() {
      let account = VueCookieNext.getCookie("account");
      if (account === null)
        return false;
      return account.adm === true;
    },
  },
  data() {
    return {
      // Algumas variaveis para usar no paginador
      prev_text: "Anterior",
      pagination_class: "pagination",
      next_text: "Proximo",
      // Usado para o filtro de categoria
      actualCategory: -1,
    };
  },
};


</script>

<style scoped>
/* Adopt bootstrap pagination stylesheet. */
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
@import '../assets/base.css';

.books {
  margin-top: 120px;
  padding: 0 2vw;
  display: flex;
  min-height: 50vh;
  flex-wrap: wrap;
}

</style>
