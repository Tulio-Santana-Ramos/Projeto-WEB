<script setup>
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";
import Books from "@/components/BagBook.vue";
import { VueCookieNext } from 'https://unpkg.com/vue-cookie-next@1.0.0/dist/vue-cookie-next.esm-bundler.js'

</script>

<template>
  <Menu></Menu>
  <h1 class="titlePage">Carrinho de compras</h1>
  <div class="books">

    <div  v-for="book in books">
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
    <button type="button" @click="goToFinishShop" class="btn btn-success">Finalizar compra</button>
  </div>
  <Footer></Footer>
</template>

<script>
export default {
  name: "app",
  mounted: function () {
    this.books = JSON.parse(VueCookieNext.getCookie("books"));
  },
  methods:{
    goToFinishShop(){
      this.$router.push("/finalizarCompra");
    }
  },
  data() {
    return {
      books: "",
    };
  },
};
</script>


<style scoped>
@import '@/assets/base.css';

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
