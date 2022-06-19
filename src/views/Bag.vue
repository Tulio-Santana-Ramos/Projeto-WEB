<script setup>
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";
import Books from "@/components/BagBook.vue";
import {VueCookieNext} from 'vue-cookie-next'

</script>

<template>
  <div style="min-height: calc(100vh - 410px)">
    <Menu
        :plotDropDown=false
    />
    <h1 class="titlePage">Carrinho de compras</h1>
    <div class="books">

      <div v-for="book in getBag()">
        <Books
            :Isinpromo="book.promo"
            :categories="book.categories"
            :name="book.name"
            :id="book.id"
            :promotion="book.promo"
            :price="book.price"
            :action="removeLivro"
        />
      </div>
    </div>
    <div class="buttons">

      <button type="button" @click="goToHome" class="btn btn-primary">Voltar a comprar</button>
      <button type="button" @click="goToFinishShop" class="btn btn-success">Finalizar compra</button>
    </div>

  </div>
  <Footer/>
</template>

<script>
import {VueCookieNext} from "vue-cookie-next";

export default {
  name: "app",
  data() {
    return {
      bag: null
    };
  },
  methods: {
    getAllCategories() {
      return JSON.parse(localStorage.getItem("categories"))
    },
    getBag() {
      if (this.bag === null) {
        this.bag = [];
        let allCategories = this.getAllCategories();
        for (const book of JSON.parse(localStorage.getItem("books"))) {
          if (JSON.parse(VueCookieNext.getCookie("bag")) !== null)
          for (const bagElem of JSON.parse(VueCookieNext.getCookie("bag"))) {
            if (parseInt(book.id) === parseInt(bagElem.id)) {
              let tempCategories = [];
              for (const category of book.categories) {
                for (const fixedCategory of allCategories) {
                  if (category === fixedCategory.id) {
                    tempCategories.push(fixedCategory.name);
                    break;
                  }
                }
              }
              book.categories = tempCategories;
              this.bag.push(book);
            }
          }
        }
      }
      return this.bag;
    },
    removeLivro(id) {
      VueCookieNext.setCookie("bag", JSON.stringify(this.getBag().filter(function (value) {
        return value.id !== id;
      })));
      this.$router.go(0);
    },
    goToFinishShop() {
      this.$router.push("/finalizarCompra");
    },
    goToHome() {
      this.$router.push("/");
    }
  },
};
</script>


<style scoped>
@import '@/assets/base.css';

.titlePage {
  margin: 140px 0 50px 0;
  text-align: center;
  color: #38b6ff;
}


.books {
  padding: 0em 2vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.buttons {
  display: flex;
  flex-direction: column;

}

.btn {
  width: 25vw;
  align-self: center;
  margin: 10px 0;
}

</style>
