<script setup>
import Books from '@/components/BigBooks.vue'
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";

</script>

<template>
  <Menu></Menu>
  <h1 class="titlePage">Biblioteca de livros</h1>
  <div class="books">
    <div v-for="book in books">
      <Books
        :name="book.name"
        :price="book.price"
        :categories="book.categories"
        :pages  = "book.pages"
        :filename = "book.img"
      />
    </div>
    </div>
  <Footer>

  </Footer>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      books: [
        {
          name: "Harry Potter e a pedra filosofal",
          categories: ["Aventura", "Juvenil"],
          pages: 256 ,
          img: "harry.jpg"
        },
        {
          name: "Crepusculo",
          categories: ["Aventura", "Juvenil"],
          pages: 356 ,
          img: "crepusculo.jpg"
        },
        {
          name: "Harry Potter e a pedra filosofal",
          categories: ["Aventura", "Juvenil"],
          pages: 256 ,
          img: "harry.jpg"
        },
        {
          name: "Crepusculo",
          categories: ["Aventura", "Juvenil"],
          pages: 356 ,
          img: "crepusculo.jpg"
        },
        {
          name: "Harry Potter e a pedra filosofal",
          categories: ["Aventura", "Juvenil"],
          pages: 256 ,
          img: "harry.jpg"
        },
        {
          name: "Crepusculo",
          categories: ["Aventura", "Juvenil"],
          pages: 356 ,
          img: "crepusculo.jpg"
        },
        {
          name: "Harry Potter e a pedra filosofal",
          categories: ["Aventura", "Juvenil"],
          pages: 256 ,
          img: "harry.jpg"
        },
        {
          name: "Crepusculo",
          categories: ["Aventura", "Juvenil"],
          pages: 356 ,
          img: "crepusculo.jpg"
        },
        {
          name: "Harry Potter e a pedra filosofal",
          categories: ["Aventura", "Juvenil"],
          pages: 256 ,
          img: "harry.jpg"
        },
        {
          name: "Crepusculo",
          categories: ["Aventura", "Juvenil"],
          pages: 356 ,
          img: "crepusculo.jpg"
        },
        {
          name: "Harry Potter e a pedra filosofal",
          categories: ["Aventura", "Juvenil"],
          pages: 256 ,
          img: "harry.jpg"
        },
        {
          name: "Crepusculo",
          categories: ["Aventura", "Juvenil"],
          pages: 356 ,
          img: "crepusculo.jpg"
        },
        
      ],
    };
  },
};
</script>

<style scoped>
@import '@/assets/base.css';

.titlePage{
    color: #38B6FF;
    margin-top: 150px;
    text-align: center;
    
}

.books{
  padding: 0em 2vw;
  display: flex;
  flex-wrap: wrap;
}



</style>
