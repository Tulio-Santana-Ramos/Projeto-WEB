<script setup>
import Books from "@/components/BigBooks.vue";
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";
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
  <div class="NoLogin" v-else>
    <h1>Para acessar a biblioteca e visualizar seus livros faça o login</h1>
    <div>
      <button @click="goToLogin()" type="button" class="btn btn-primary">
        <a style="height: 100%"
          ><img
            class="img-navbar"
            src="@/components/icons/user_white.png"
            style="width: 50px; height: 50px; padding: 10px" /></a
        >Login
      </button>
    </div>
  </div>

  <Footer> </Footer>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      user: false,
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
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
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
