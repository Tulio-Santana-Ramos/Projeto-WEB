<script setup>
import Books from '@/components/Books.vue'
import Footer from "@/components/Footer.vue";
import AdminMenu from "@/components/AdminMenu.vue";
import LoginRequired from "@/components/LoginRequired.vue";
</script>

<template>
  <AdminMenu></AdminMenu>
  
  <h1 class="titlePage">Página Inicial</h1>
  <div v-if="admin" class="books">
    <div v-for="book in books">
      <Books
        :name="book.name"
        :price="book.price"
        :categories="book.categories"
        :Isinpromo ="book.promo"
        :filename ="book.img"
      />
    </div>
  </div>
  <LoginRequired v-else :text="text"></LoginRequired>
  <Footer> </Footer>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      admin: true,
      text: "Para acessar essa página é necessário ser um administrador",
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
@import "@/assets/base.css";

.titlePage {
  color: #38b6ff;
  margin-top: 150px;
  text-align: center;
}

.books {
  padding: 0em 2vw;
  display: flex;
  flex-wrap: wrap;
}

.NoLogin {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #38b6ff;
  height: 51.7vh;
}

.btn.btn-primary {
  margin-top: 50px;
  width: 200px;
  background-color: #38b6ff;
  border-color: #38b6ff;
}

.btn.btn-primary:hover {
  width: 200px;
  background-color: #134968;
  border-color: #134968;
}
</style>
