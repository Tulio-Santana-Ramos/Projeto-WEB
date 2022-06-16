<script setup>
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";
import Books from "@/components/BagBook.vue";
import {VueCookieNext} from 'vue-cookie-next'

</script>

<template>
  <Menu></Menu>
  <h1 class="titlePage">Carrinho de compras</h1>
  <div class="books">

    <div  v-for="book in getBag()">
      <Books
          :Isinpromo="book.promo"
          :categories="book.categories"
          :filename="book.img"
          :name="book.name"
          :id="book.id"
          :price="book.price"
          :action="removeLivro"
      />
    </div>
  </div>
  <div class="buttons">

    <button type="button" @click="goToHome" class="btn btn-primary">Voltar a comprar</button>
    <button type="button" @click="goToFinishShop" class="btn btn-success">Finalizar compra</button>
  </div>
  <Footer></Footer>
</template>

<script>
import {VueCookieNext} from "vue-cookie-next";

export default {
  name: "app",
  methods:{
    getBag(){
      return JSON.parse(VueCookieNext.getCookie("bag"));
    },
    removeLivro(id){
      console.log("A");
      VueCookieNext.setCookie("bag",JSON.stringify(this.getBag().filter(function(value){
        return value.id !== id;
      })));
      this.$router.go(0);
    },
    goToFinishShop(){
      this.$router.push("/finalizarCompra");
    },
    goToHome(){
      this.$router.push("/");
    }
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
