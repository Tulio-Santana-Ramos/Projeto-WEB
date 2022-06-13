<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
import Books from "@/components/Books.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
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
  <Footer> </Footer>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      books: [
        {
          name: "Harry Potter e a pedra filosofal",
          categories: ["Aventura", "Juvenil"],
          price: "30.90",
          promo: true ,
          img: "crepusculo.jpg"
        },
        {
          name: "Crepusculo",
          categories: ["Aventura", "Juvenil"],
          price: "30.90",
          promo: false,
          img: "crepusculo.jpg"
        }
       
      ],
    };
  },
};
</script>

<style>
@import "@/assets/base.css";

.books {
  padding: 0em 2vw;
  display: flex;
  justify-content: row;
  flex-wrap: wrap;
}
</style>
