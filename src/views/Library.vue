<script setup>
import Books from "@/components/BigBooks.vue";
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";
import LoginRequired from "@/components/LoginRequired.vue";
</script>

<template>
  <Menu></Menu>

  <h1 class="titlePage">Biblioteca de livros</h1>
  <div v-if="user" class="books">
    <div v-for="book in books">
      <Books
        :name="book.name"
        :price="book.price"
        :categories="book.categories"
        :pages="book.pages"
        :filename="book.img"
      />
    </div>
  </div>
  <LoginRequired v-else :text="text"></LoginRequired>
 

  <Footer> </Footer>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      user: false,
      text: "Para acessar a biblioteca e visualizar seus livros faça o login",
      books: [
        {
          name: "Harry Potter e a pedra filosofal",
          categories: ["Aventura", "Juvenil"],
          pages: 256,
          img: "harry.jpg",
        },
        {
          name: "Crepusculo",
          categories: ["Aventura", "Juvenil"],
          pages: 356,
          img: "crepusculo.jpg",
        },
        {
          name: "Harry Potter e a pedra filosofal",
          categories: ["Aventura", "Juvenil"],
          pages: 256,
          img: "harry.jpg",
        },
        {
          name: "Crepusculo",
          categories: ["Aventura", "Juvenil"],
          pages: 356,
          img: "crepusculo.jpg",
        },
        {
          name: "Harry Potter e a pedra filosofal",
          categories: ["Aventura", "Juvenil"],
          pages: 256,
          img: "harry.jpg",
        },
        {
          name: "Crepusculo",
          categories: ["Aventura", "Juvenil"],
          pages: 356,
          img: "crepusculo.jpg",
        },
        {
          name: "Harry Potter e a pedra filosofal",
          categories: ["Aventura", "Juvenil"],
          pages: 256,
          img: "harry.jpg",
        },
        {
          name: "Crepusculo",
          categories: ["Aventura", "Juvenil"],
          pages: 356,
          img: "crepusculo.jpg",
        },
        {
          name: "Harry Potter e a pedra filosofal",
          categories: ["Aventura", "Juvenil"],
          pages: 256,
          img: "harry.jpg",
        },
        {
          name: "Crepusculo",
          categories: ["Aventura", "Juvenil"],
          pages: 356,
          img: "crepusculo.jpg",
        },
        {
          name: "Harry Potter e a pedra filosofal",
          categories: ["Aventura", "Juvenil"],
          pages: 256,
          img: "harry.jpg",
        },
        {
          name: "Crepusculo",
          categories: ["Aventura", "Juvenil"],
          pages: 356,
          img: "crepusculo.jpg",
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
