<script setup>
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";
import Books from "@/components/BagBook.vue";
</script>

<template>
  <Menu></Menu>
  <h1 class="titlePage">Carrinho de compras</h1>
  <div class="books">
    <div v-for="book in books">
      <Books
        :name="book.name"
        :price="book.price"
        :categories="book.categories"
        :Isinpromo="book.promo"
        :filename="book.img"
      />
    </div>
  </div>
  <div class="buttons">

    <button type="button" class="btn btn-primary">Voltar a comprar</button>
    <button type="button" class="btn btn-success">Finalizar compra</button>
  </div>
  <Footer></Footer>
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
          promo: true,
          img: "harry.jpg",
        },
         {
          name: "Harry Potter e a pedra filosofal",
          categories: ["Aventura", "Juvenil"],
          price: "30.90",
          promo: true,
          img: "harry.jpg",
        },
         {
          name: "Harry Potter e a pedra filosofal",
          categories: ["Aventura", "Juvenil"],
          price: "30.90",
          promo: true,
          img: "harry.jpg",
        },
      ],
    };
  },
};
</script>


<style scoped>
@import '@/assets/base.css';

body
.titlePage{
    margin: 140px 0 50px 0;
    text-align: center;
    color: #38b6ff;
}


.books{
  padding: 0em 2vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.buttons{
    display: flex;
    flex-direction: column;

}

.btn{
    width: 25vw;
    align-self: center;
    margin: 10px 0;
}

</style>
