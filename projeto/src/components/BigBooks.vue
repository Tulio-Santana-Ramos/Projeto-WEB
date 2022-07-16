<template>
  <div class="home-book">
    <img class="img-livro" v-bind:src="'/src/assets/' + id + '.jpg'"/>
    <div class="home-book-info">
      <p class="title">{{ name }}</p>
      <ul v-for="category in categories" class="category">
        <li>{{ category }}</li>
      </ul>
      <p class="pages">{{ pages }} páginas</p>
      <button type="button" class="btn btn-primary" @click="goToReadBook()">Ler agora</button>
      <br>
      <button v-if="!isEvaluated()" type="button" class="btn btn-primary" v-bind:data-bs-target="'#modalEvaluate'+id"
              data-bs-toggle="modal" @click="evaluateBook(id)">Avaliar o livro
      </button>
    </div>
  </div>
  <div v-bind:id="'modalEvaluate'+id" class="modal" style="margin-top: 200px">
    <div class="modal-dialog">
      <div class="modal-content">

        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Avalie o livro {{ this.$props.name }}</h4>
          <button class="btn-close" data-bs-dismiss="modal" type="button"></button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
          <star-rating v-model:rating="rating"/>
          <br>
          <div class="input-group input-container" style="margin-right: auto; margin-left: auto;">
                      <span class="input-group-text">
                        Dê sua opnião
                      </span>

            <input class="form-control" placeholder="Opnião" style="height: 45px;font-size: medium"
                   type="text" v-model="opnion">
          </div>
        </div>

        <!-- Modal footer -->
        <div class="modal-footer">
          <button class="btn btn-primary" data-bs-dismiss="modal" type="button" @click="evaluate()">Avaliar</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

import {VueCookieNext} from "vue-cookie-next";
import axios from "axios";

export default {
  name: "books",
  props: ["name", "categories", "pages", "id"],
  methods: {
    goToReadBook() {

      VueCookieNext.setCookie("lastBook", this.id);
      let route = this.$router.resolve("/lerLivro");
      window.open(route.href, '_blank');

    },
    evaluateBook(id) {
      for (const book of this.all_books) {
        if (id === book.id) {
          this.book = book;
        }
      }

    },
    async evaluate() {

      let newEvaluation = {info:this.opnion,stars:this.rating,op:"e",id:this.$props.id};
      let res = await fetch("http://localhost:3000/api/book/", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newEvaluation)
      });
      if (res.status !== 200) {
        console.log("Deu errado")
      }
      let actualUser = VueCookieNext.getCookie("account");
      let libraries = JSON.parse(localStorage.getItem("libraries"));
      console.log(actualUser);
      for (let i = 0; i < libraries.length; i++) {
        console.log(libraries[i].user)
        if (actualUser.id === libraries[i].user) {
          for (let j = 0; j < libraries[i].lib.length; j++) {
            if (libraries[i].lib[j].id === this.id)
              libraries[i].lib[j].eval = true;
          }
        }
      }
      localStorage.setItem("libraries", JSON.stringify(libraries));
      this.eval++;

    },
    isEvaluated() {
      for (const book in this.library.lib) {
        if (book.id === this.id) {
          return book.eval;
        }
      }
    }
  },
  data() {
    return {
      library:[],
      opnion:"",
      all_books:[]
    };
  },
  async mounted() {
    const res_books = await axios.get("http://localhost:3000/api/book/");
    this.all_books = res_books.data;
    let actualUser = VueCookieNext.getCookie("account")
    if (actualUser !== '') {
      const res_lib = await axios.get("http://localhost:3000/api/lib/?id=" + actualUser._id);
      this.library = res_lib.data;
      console.log(this.library)
    }
  }
};
</script>

<style scoped>
.img-livro {
  width: 200px;
}

.home-book:hover {
  border-radius: 0.5em;
  box-shadow: 2px 2px 2px 2px lightgray;
}

.home-book {
  display: flex;
  width: 570px;
  margin: 2vw 0;
  margin-right: 2vw;
}

.home-book-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 2em;
  font-family: "Grape Nuts", cursive;
  font-family: "Open Sans", sans-serif;
}

.category {
  color: #0b859f;
}

.title {
  font-size: 1.5em;
}

.pages {
  font-size: 1.2em;
}

.btn.btn-primary {
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
