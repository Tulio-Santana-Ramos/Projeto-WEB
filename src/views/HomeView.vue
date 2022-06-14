<script setup>
import Books from '@/components/Books.vue'
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";

</script>

<template>
  <Menu></Menu>
  <div class="books">
    <div v-for="book in books">
      <Books
        :name="book.name"
        :price="book.price"
        :categories="book.categories"
        :Isinpromo = "book.promo"
        :filename = "book.img"
      />
    </div>
    </div>
  <Footer>

  </Footer>
  <!--
  TODO: Pagination
-->
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

<style>
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

</style>
