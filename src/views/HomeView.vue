<script setup>
import Books from '@/components/Books.vue'
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";
import AdminMenu from "@/components/AdminMenu.vue";
</script>

<template>
  <AdminMenu v-if="isAdmin()"
             :plotDropDown="true"
  />
  <Menu v-else
        :plotDropDown="true"
        :filter="filterDropdown"
  />
  <div class="books">
    <div v-for="book in getActualBooks()" @click="goToBook(book.id)">
      <Books
        :name="book.name"
        :price="book.price"
        :categories="book.categories"
        :Isinpromo = "book.promo"
        :filename = "book.img"
      />
    </div>
    </div>
  <paginate
      v-model="page"
      :page-count="getNumPages()"
      :container-class="pagination_class"
      :initial-page="getActualPage()"
      :prev-text="prev_text"
      :next-text="next_text"
      :click-handler="changePage"
  >
  </paginate>
  <Footer/>

</template>

<script>
import Paginate from 'vuejs-paginate-next';
import {VueCookieNext} from "vue-cookie-next";
const maxBooks = 1;
export default {
  components: {
    paginate: Paginate,
  },
  name: 'app',
  methods: {
    filterDropdown(id){
      this.$router.push({path:"/",query:{id:id}});
    },
    goToBook(idLivro){
      this.$router.push({path:"/livro",query:{id:idLivro}});
     },
    getActualPage(){
      if(this.$route.query.page<=this.getNumPages())
        return parseInt(this.$route.query.page);
      return 1;
    },
    getNumPages(){
      return (Math.ceil(this.getLengthBooks()/maxBooks));
    },
    changePage(numPage){
      if (this.$route.query.id !== null){
        this.$router.push({path:"/",query:{id:this.$route.query.id,page:numPage}});
        return;
      }
      this.$router.push({path:"/",query:{page:numPage}});
    },getLengthBooks(){
      return this.getAllBooks().length;
    },
    getAllBooks(){
      return JSON.parse(localStorage.getItem("books"));
    },
    getAllCategories(){
      return JSON.parse(localStorage.getItem("categories"))
    },
    //TODO: Falta arruma essa funcao
    getActualBooks(){
      let temp = [];
      let books = this.getAllBooks();
      let page = this.$route.query.page;
      if(page === undefined)
        page = 1;
      else {
        if (page <= 0 || this.$route.query.page > this.getNumPages())
          this.$router.push("/");
      }
      page--;
      let allCategories = this.getAllCategories();
      for (let i = maxBooks*page; (i < maxBooks+maxBooks*page) && (i < books.length); i++){
        let tempCategories = [];
        for (const category of books[i].categories) {
          for (const fixedCategory of allCategories){
            if(category === fixedCategory.id) {
              tempCategories.push(fixedCategory.name);
              break;
            }
          }
        }

        if(tempCategories.length !== 0) {
          temp.push(books[i]);
          temp[i].categories = tempCategories;
        }
      }
      return temp;
    },
    isAdmin(){
      let account = VueCookieNext.getCookie("account");
      if(account === null)
        return false;
      return account.adm === true;
    },
  },
  data () {
    return {
      prev_text:"Anterior",
      pagination_class:"pagination",
      next_text:"Proximo",
    };
  },
};


</script>

<style scoped>
/* Adopt bootstrap pagination stylesheet. */
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
@import '@/assets/base.css';

body

.books{
  margin-top: 120px;
  padding: 0em 2vw;
  display: flex;
  flex-wrap: wrap;
}

.promo{
  background-color: #1B8C1F;
  color: white;
  text-align: center;
  border-radius: 5px;
  padding: 2px 0;
}

.pagination{
  padding: 15px;
}


/* Write your own CSS for pagination */
.pagination:hover {
  cursor: pointer;
}


</style>
