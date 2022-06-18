<script setup>
import Books from '@/components/Books.vue'
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";
import AdminMenu from "@/components/AdminMenu.vue";
</script>

<template>
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
  <Footer/>

</template>

<script>
import Paginate from 'vuejs-paginate-next';
import {VueCookieNext} from "vue-cookie-next";

const maxBooks = 2;
export default {
  components: {
    paginate: Paginate,
  },
  name: 'app',
  mounted() {
    console.log(this.$route.query.category);
    if (this.$route.query.category !== undefined)
      this.actualCategory = this.$route.query.category;
  },
  methods: {
    filterDropdown(id) {
      this.$router.push({path: "/", query: {category: id}});
    },
    goToBook(idLivro) {
      this.$router.push({path: "/livro", query: {id: idLivro}});
    },
    getActualPage() {
      if (this.$route.query.page <= this.getNumPages())
        return parseInt(this.$route.query.page);
      return 1;
    },
    getNumPages() {
      return (Math.ceil(this.getActualBooks().length / maxBooks));
    },
    changePage(numPage) {
      if (this.$route.query.category !== null) {
        this.$router.push({path: "/", query: {category: this.$route.query.category, page: numPage}});
        return;
      }
      this.$router.push({path: "/", query: {page: numPage}});
    },
    getAllBooks() {
      return JSON.parse(localStorage.getItem("books"));
    },
    getAllCategories() {
      return JSON.parse(localStorage.getItem("categories"))
    },
    paginate() {
      let books = this.getActualBooks();
      let allCategories = this.getAllCategories();
      let temp = [];
      let page = this.$route.query.page;
      if (page === undefined)
        page = 1;
      else {
        if (page <= 0 || this.$route.query.page > books.length)
          this.$router.push("/");
      }
      page--;
      for (let i = maxBooks * page; (i < maxBooks * (page + 1)) && (i < books.length); i++) {
        let tempCategories = [];
        let book = books[i];
        for (let j = 0; j < book.categories.length; j++) {
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
    isAdmin() {
      let account = VueCookieNext.getCookie("account");
      if (account === null)
        return false;
      return account.adm === true;
    },
  },
  data() {
    return {
      prev_text: "Anterior",
      pagination_class: "pagination",
      next_text: "Proximo",
      actualCategory: -1,
    };
  },
};


</script>

<style scoped>
/* Adopt bootstrap pagination stylesheet. */
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
@import '@/assets/base.css';

body
.books {
  margin-top: 120px;
  padding: 0em 2vw;
  display: flex;
  flex-wrap: wrap;
}

.promo {
  background-color: #1B8C1F;
  color: white;
  text-align: center;
  border-radius: 5px;
  padding: 2px 0;
}

.pagination {
  padding: 15px;
}


/* Write your own CSS for pagination */
.pagination:hover {
  cursor: pointer;
}


</style>
