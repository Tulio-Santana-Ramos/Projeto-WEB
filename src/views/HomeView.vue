<script setup>
import Books from '@/components/Books.vue'
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";
import AdminMenu from "@/components/AdminMenu.vue";
</script>

<template>
  <AdminMenu v-if="admin"></AdminMenu>
  <Menu v-else></Menu>
  <div class="books"  @click="goToBook()">
    <div v-for="book in getActualBooks()">
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
const maxBooks = 10;
export default {
  components: {
    paginate: Paginate,
  },
  name: 'app',
  methods: {
    goToBook(){
      this.$router.push("/livro");
     },
    getActualPage(){
      if(this.$route.query.page<=this.getNumPages())
        return this.$route.query.page;
      return 1;
    },
    getNumPages(){
      return (Math.ceil(this.getLengthBooks()/maxBooks));
    },
    changePage(numPage){
      this.$router.push("/?page="+numPage);
    },getLengthBooks(){
      return 16;
    },
    getActualBooks(){
      let temp = [];
      let page = this.$route.query.page;
      if(page <= 0 || this.$route.query.page>this.getNumPages())
        this.$router.push("/");
      if(page === undefined)
        page = 1;
      page--;
      for (let i = maxBooks*page; (i < maxBooks+maxBooks*page) && (i < this.getLengthBooks()); i++){
        temp.push(this.books[i]);
      }
      return temp;
    },
  },
  data () {
    return {
      admin: false,
      prev_text:"Anterior",
      pagination_class:"pagination",
      next_text:"Proximo",
      books: [
        {
          name: "Harry Potter e a pedra filosofal",
          categories: ["Aventura", "Juvenil"],
          price: "30.90",
          promo: true ,
          img: "harry.jpg"
        },
        {
          name: "Crepusculo",
          categories: ["Aventura", "Juvenil"],
          price: "30.90",
          promo: false,
          img: "crepusculo.jpg"
        },
          {
          name: "Harry Potter e a pedra filosofal",
          categories: ["Aventura", "Juvenil"],
          price: "30.90",
          promo: true ,
          img: "harry.jpg"
        },
        {
          name: "Crepusculo",
          categories: ["Aventura", "Juvenil"],
          price: "30.90",
          promo: false,
          img: "crepusculo.jpg"
        },
          {
          name: "Harry Potter e a pedra filosofal",
          categories: ["Aventura", "Juvenil"],
          price: "30.90",
          promo: true ,
          img: "harry.jpg"
        },
        {
          name: "Crepusculo",
          categories: ["Aventura", "Juvenil"],
          price: "30.90",
          promo: false,
          img: "crepusculo.jpg"
        },
          {
          name: "Harry Potter e a pedra filosofal",
          categories: ["Aventura", "Juvenil"],
          price: "30.90",
          promo: true ,
          img: "harry.jpg"
        },
        {
          name: "Crepusculo",
          categories: ["Aventura", "Juvenil"],
          price: "30.90",
          promo: false,
          img: "crepusculo.jpg"
        },
          {
          name: "Harry Potter e a pedra filosofal",
          categories: ["Aventura", "Juvenil"],
          price: "30.90",
          promo: true ,
          img: "harry.jpg"
        },
        {
          name: "Crepusculo",
          categories: ["Aventura", "Juvenil"],
          price: "30.90",
          promo: false,
          img: "crepusculo.jpg"
        },
        {
          name: "Harry Potter e a pedra filosofal",
          categories: ["Aventura", "Juvenil"],
          price: "30.90",
          promo: true ,
          img: "harry.jpg"
        },
        {
          name: "Crepusculo",
          categories: ["Aventura", "Juvenil"],
          price: "30.90",
          promo: false,
          img: "crepusculo.jpg"
        },
        {
          name: "Harry Potter e a pedra filosofal",
          categories: ["Aventura", "Juvenil"],
          price: "30.90",
          promo: true ,
          img: "harry.jpg"
        },
        {
          name: "Crepusculo",
          categories: ["Aventura", "Juvenil"],
          price: "30.90",
          promo: false,
          img: "crepusculo.jpg"
        },
        {
          name: "Harry Potter e a pedra filosofal",
          categories: ["Aventura", "Juvenil"],
          price: "30.90",
          promo: true ,
          img: "harry.jpg"
        },
        {
          name: "Crepusculo",
          categories: ["Aventura", "Juvenil"],
          price: "30.90",
          promo: false,
          img: "crepusculo.jpg"
        },
        {
          name: "Harry Potter e a pedra filosofal",
          categories: ["Aventura", "Juvenil"],
          price: "30.90",
          promo: true ,
          img: "harry.jpg"
        },
        {
          name: "Crepusculo",
          categories: ["Aventura", "Juvenil"],
          price: "30.90",
          promo: false,
          img: "crepusculo.jpg"
        },
      ],
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
