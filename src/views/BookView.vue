<script setup>
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";
import AdminMenu from "@/components/AdminMenu.vue";
import BookInfo from "@/components/BookInfo.vue";
import Evaluation from "@/components/avaliationResult.vue";</script>


<template>
  <AdminMenu v-if="isAdmin()"></AdminMenu>
  <Menu v-else></Menu>
  <div class="adm-operations" v-if="isAdmin()">
    <button class="add-book"><img src="@/components/icons/addition.png" style="width: 50px; height: 50px;"/> Adicionar promoção</button>
    <button class="remove-book"><img src="@/components/icons/remove.png" style="width: 50px; height: 50px;"/> Excluir livro</button>
  </div>
  <div>
    <BookInfo
      :name="this.getBookDetails().name"
      :price="book.price"
      :categories="book.categories"
      :Isinpromo="book.promo"
      :quantidade="book.quantidade"
      :filename="book.img"
      :synopsis="book.synopsis"
      :editor="book.editor"
      :author="book.autor"
      :tradutor="book.tradutor"
      :year="book.year"
      :addToBag="addToBag"
      :id="book.id"
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
    isAdmin(){
      let account = VueCookieNext.getCookie("account");
      if(account === null)
        return false;
      return account.adm === 'ADM';
    },
    getBookDetails(){
      let books = JSON.parse(localStorage.getItem("books"));
      let id = this.$route.query.id;
      for (let book of books) {
        if (parseInt(book.id) === parseInt(id)) {
          this.book = book;
          return book;
        }
      }
    },
    addToBag(idLivro){
      let bag = JSON.parse(VueCookieNext.getCookie("bag"));
      let newBook = {id:idLivro};
      console.log("a");
      for (const book of bag) {
        console.log(book)
      }
      bag.push(newBook);
      let temp = JSON.stringify(bag);
      VueCookieNext.setCookie("bag",temp);
    }
  },
  data () {
    return {
      book: {},
      book_evaluation:[
        {
          info: "Muito mal escrito!",
          stars: 2,
        },
        {
          info: "Bom pra passar o tempo, mas nada impressionante",
          stars: 3,
        },
        {
          info: "Genial",
          stars: 4,
        },
        {
          info: "Muito mal escrito!",
          stars: 2,
        },
        {
          info: "Muito mal escrito!",
          stars: 2,
        },
      ],
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
