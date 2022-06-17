<script setup>
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";
import AdminMenu from "@/components/AdminMenu.vue";
import BookInfo from "@/components/BookInfo.vue";
import Evaluation from "@/components/avaliationResult.vue";</script>


<template>
  <AdminMenu v-if="isAdmin()"
    :plotDropDown="false"
  />
  <Menu v-else
    :plotDropDown="false"
  />
  <div class="adm-operations" v-if="isAdmin()">
    <button class="add-book" data-bs-target="#modalAddPromo" data-bs-toggle="modal"><img src="@/components/icons/addition.png" style="width: 50px; height: 50px;"/> Adicionar promoção</button>
    <!-- The Modal -->
    <div id="modalAddPromo" class="modal" style="margin-top: 200px">
      <div class="modal-dialog">
        <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Adicionar livro em promoção</h4>
            <button class="btn-close" data-bs-dismiss="modal" type="button"></button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <div>
              <div class="input-group input-container">
                    <span class="input-group-text" style="width: 87px;">
                      Qntd
                    </span>
                <input class="form-control" placeholder="Quantos livros colocar em promoção"
                       style="width: 350px;height: 45px;font-size: medium"
                       ref="input_qntd">
                <br>
                    <span class="input-group-text" style="width: 87px;">
                      Valor
                    </span>
                <input class="form-control" placeholder="Valor de cada livro"
                       style="width: 350px;height: 45px;font-size: medium"
                       ref="input_valor">
              </div>
            </div>
          </div>

          <!-- Modal footer -->
          <div class="modal-footer">
            <button class="btn btn-primary" data-bs-dismiss="modal" @click="addPromo(this.$refs.input_qntd.value,this.$refs.input_valor.value)" type="button">Adicionar</button>
            <button class="btn btn-danger" data-bs-dismiss="modal" type="button">Cancelar</button>
          </div>

        </div>
      </div>
    </div>
    <button class="remove-book" data-bs-target="#modalRemLivro" data-bs-toggle="modal"><img src="@/components/icons/remove.png" style="width: 50px; height: 50px;"/> Excluir livro</button>
    <!-- The Modal -->
    <div id="modalRemLivro" class="modal" style="margin-top: 200px">
      <div class="modal-dialog">
        <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Remover livro da base de dados</h4>
            <button class="btn-close" data-bs-dismiss="modal" type="button"></button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <div>
              <span style="color: red">Atenção! <br> Esta ação é irreversivel, tem certeza que deseja realiza-la?</span>
            </div>
          </div>

          <!-- Modal footer -->
          <div class="modal-footer">
            <button class="btn btn-primary" data-bs-dismiss="modal" @click="remLivro()" type="button">Sim, excluir</button>
            <button class="btn btn-danger" data-bs-dismiss="modal" type="button">Cancelar</button>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div>
    <BookInfo
      :name="this.getBookDetails().name"
      :price="book.price"
      :categories="book.categories"
      :promotion="book.promo"
      :synopsis="book.synopsis"
      :editor="book.editor"
      :author="book.autor"
      :tradutor="book.tradutor"
      :year="book.year"
      :atClick="addToBag"
      :id="book.id"
      :inBag="searchInBag(book.id)"
      :inLib="searchInBag(book.id)"
    />
  </div>

  <div class="book-stats">
    <div v-for="book in book.evaluations">
      <Evaluation :info="book.info" :stars="book.stars"></Evaluation>
    </div>
  </div>
  <Footer> </Footer>
</template>

<script>
import {VueCookieNext} from "vue-cookie-next";

export default {
  name: 'app',
  methods:{
    addPromo(qntd,valor){
      let books = JSON.parse(localStorage.getItem("books"));
      let id = this.$route.query.id;
      for (let book of books) {
        if (parseInt(book.id) === parseInt(id)) {
          if(!book.promo.is){
            let promo = {}
            promo.is = true;
            promo.numberBooks = qntd;
            promo.tempPrice = valor;
            book.promo = promo;
          }else{
            book.promo.numberBooks = parseInt(book.promo.numberBooks) + parseInt(qntd);
            book.promo.tempPrice = valor;
          }
          this.book = book;
          break;
        }
      }
      localStorage.setItem("books",JSON.stringify(books));
    },
    remLivro(){
      let books = JSON.parse(localStorage.getItem("books"));
      let id = this.$route.query.id;
      for (let i = 0; i < books.length; i++) {
        if (parseInt(books[i].id) === parseInt(id)) {
          books.splice(i,1);
          break;
        }
      }
      localStorage.setItem("books",JSON.stringify(books));
      this.$router.push("/");
    },
    /*searchInLib(id){
      let acc = VueCookieNext.getCookie("account");
      if(acc === undefined)
        return false;
      let libs = JSON.parse(localStorage.getItem("libraries"));
      for (const lib of libs) {
        if (lib.user === acc.id){
          for (const book of lib.lib) {
            if (book.id === id){
              return true;
            }
          }
        }
      }
      return false;
    },*/
    searchInBag(id){
      let bag = JSON.parse(VueCookieNext.getCookie("bag"));
      for (const book of bag) {
        if (book.id === id)
          return true;
      }
      return false;
    },
    isAdmin(){
      let account = VueCookieNext.getCookie("account");
      if(account === null)
        return false;
      return account.adm === true;
    },
    getAllCategories(){
      return JSON.parse(localStorage.getItem("categories"))
    },
    getBookDetails(){
      let books = JSON.parse(localStorage.getItem("books"));
      let id = this.$route.query.id;
      let allCategories = this.getAllCategories();
      for (let book of books) {
        if (parseInt(book.id) === parseInt(id)) {
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
          this.book = book;
          return book;
        }
      }
    },
    addToBag(idLivro){
      if(this.searchInBag(idLivro))
        return;
      let bag = JSON.parse(VueCookieNext.getCookie("bag"));
      let newBook = {id:idLivro};
      bag.push(newBook);
      let temp = JSON.stringify(bag);
      VueCookieNext.setCookie("bag",temp);
    }
  },
  data () {
    return {
      book: {},
    };
  },
};
</script>

<style scoped>

.evaluation {
  padding-left: 10px;
  border-style: solid;
  border-color: #fff #fff #38b6ff #fff;
}

.book-stats {
  color: black;
  font-size: 1.25em;
  margin-top: 5px;
  margin-bottom: 10px;
  border-style: solid;
  border-color: #38b6ff #fff #fff #fff;
}

.adm-operations {
  float:right;
  text-align: justify;
  text-align-last: right;
  padding-right: 25%;
  font-size: large;
  font-family: "Grape Nuts", cursive;
  font-family: "Open Sans", sans-serif;
}

.add-book {
  color: #1b8c1f;
  margin-right: 50px;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  font-weight: bold;
}

.remove-book {
  color: #aa320e;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  font-weight: bold;
}

.add-book:hover {
  color: #fff;
  background-color: rgb(20, 145, 57);
  border-radius: 10px;
}

.remove-book:hover {
  color: #fff;
  background-color: rgb(163, 33, 33);
  border-radius: 10px;
}

</style>
