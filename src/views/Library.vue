<script setup>
import Books from "@/components/BigBooks.vue";
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";
import LoginRequired from "@/components/LoginRequired.vue";
import {VueCookieNext} from "vue-cookie-next";
</script>

<template>
  <Menu
      :plotDropDown="true"
  />

  <h1 class="titlePage">Biblioteca de livros</h1>
  <div v-if="hadUser()" class="books">
    <div v-for="book in getUserBooks()">
      <Books
        :name="book.name"
        :categories="book.categories"
        :pages="book.pages"
        :id="book.id"
      />
    </div>
  </div>
  <LoginRequired v-else :text="text"></LoginRequired>

  <!-- The Modal -->
  <div id="modalLogin" class="modal" style="margin-top: 200px">
    <div class="modal-dialog">
      <div class="modal-content">

        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Você não está logado</h4>
          <button class="btn-close" data-bs-dismiss="modal" type="button"></button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
          Parece que você não está logado.
          Para fazer compras no nosso site faça login ou crie uma conta
        </div>

        <!-- Modal footer -->
        <div class="modal-footer">
          <button class="btn btn-primary" data-bs-dismiss="modal" type="button" @click="this.$router.push('/login')">Login</button>
          <button class="btn btn-primary" data-bs-dismiss="modal" type="button" @click="this.$router.push('/novousuario')">Cadastre-se</button>
        </div>

      </div>
    </div>
  </div>
  <Footer> </Footer>
</template>

<script>
import {VueCookieNext} from "vue-cookie-next";

export default {
  name: "app",
  methods:{
    goToBook(idLivro){
      this.$router.push({path:"/livro",query:{id:idLivro}});
    },
    hadUser(){
      return VueCookieNext.getCookie("account") !== null;
    },
    getAllCategories(){
      return JSON.parse(localStorage.getItem("categories"))
    },
    getUserBooks(){
      let actualUser = VueCookieNext.getCookie("account");
      let libraries = JSON.parse(localStorage.getItem("libraries"));
      let allCategories = this.getAllCategories();
      let temp = [];
      for (const library of libraries) {
        if(library.user === actualUser.id){
          for (const book of JSON.parse(localStorage.getItem("books"))) {
            for (const bookLib of library.lib) {
              if (parseInt(book.id) === parseInt(bookLib.id)) {
                let tempCategories = [];
                for (const category of book.categories) {
                  for (const fixedCategory of allCategories){
                    if(category === fixedCategory.id) {
                      tempCategories.push(fixedCategory.name);
                      break;
                    }
                  }
                }
                book.categories = tempCategories;
                temp.push(book);
              }
            }
          }
        }
      }
      return temp;
    }
  },
  data() {
    return {
      user: true,
      text: "Para acessar a biblioteca e visualizar seus livros faça o login",
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
