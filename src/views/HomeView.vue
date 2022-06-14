<script setup>
import Books from '@/components/Books.vue'
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";

</script>

<template>
  <Menu></Menu>
  <div class="books">
    <div v-for="book in getActualBooks(this.$route.params.actualPageBooks)">
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
      :page-count="10"
      :container-class="pagination"
      :prev-text="prev"
      :next-text="next"
      :click-handler="changePage"
  >
  </paginate>
  <Footer/>

</template>

<script>
import Paginate from 'vuejs-paginate-next';
const maxBooks = 15;
export default {
  components: {
    paginate: Paginate,
  },
  name: 'app',
  methods: {
    changePage(numPage){
      this.$router.push("/?"+numPage);
    },
    getActualBooks(){
      let temp = [];
      let page = this.$route.query.page;
      if(page === undefined)
        page = 0;
      for (let i = maxBooks*page; i < maxBooks; i++){
        temp.push(this.books[i]);
      }
      return temp;
    },
  },
  data () {
    return {
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


/* Write your own CSS for pagination */
.pagination {
}
.page-item {
}

</style>
