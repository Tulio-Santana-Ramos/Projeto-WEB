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
          <h4 class="modal-title">Avalie o livro {{ book.name }}</h4>
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

      let books = JSON.parse(localStorage.getItem("books"));
      for (const book of books) {
        if (id === book.id) {
          this.book = book;
        }
      }

    },
    evaluate() {

      let newEvaluation = {};
      newEvaluation.info = this.opnion;
      newEvaluation.stars = this.rating;
      this.book.evaluations.push(newEvaluation);
      let books = JSON.parse(localStorage.getItem("books"));
      for (const index in books) {
        if (this.id === books[index].id) {
          books[index] = this.book;
        }
      }
      localStorage.setItem("books", JSON.stringify(books));
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

      let actualUser = VueCookieNext.getCookie("account");
      let libraries = JSON.parse(localStorage.getItem("libraries"));
      for (const library of libraries) {
        if (actualUser.id === library.user) {
          for (const book of library.lib) {
            if (book.id === this.id) {
              return book.eval;
            }
          }
        }
      }

    }
  },
  data() {
    return {
      rating: 0,
      opnion: "",
      eval: 0,
      book: {
        name: "Harry Potter e a pedra filosofal",
        pages: 100,
        categories: [0, 1],
        price: 30.90,
        promo: {
          is: true,
          numberBooks: 10,
          tempPrice: 5
        },
        synopsis: "Quando virou o envelope, com a mão trêmula, Harry viu um lacre de cera púrpura com um brasão; um leão, uma águia, um texugo e uma cobra circulando uma grande letra \"H\". Harry Potter nunca havia ouvido falar de Hogwarts quando as cartas começaram a aparecer no capacho da Rua dos Alfeneiros, nº 4. Escritos a tinta verde-esmeralda em pergaminho amarelado com um lacre de cera púrpura, as cartas eram rapidamente confiscadas por seus pavorosos tio e tia. Então, no aniversário de onze anos de Harry, um gigante com olhos que luziam como besouros negros chamado Rúbeo Hagrid surge com notícias surpreendentes: Harry Potter é um bruxo e tem uma vaga na Escola de Magia e Bruxaria de Hogwarts. Uma incrível aventura está para começar!",
        editor: "Pottermore Publishing",
        autor: "MOSS | J.K. ROWLING",
        tradutor: "LIA WYLER",
        year: 2015,
        id: 0,
        evaluations: [{info: "Muito mal escrito!", stars: 2}, {
          info: "Bom pra passar o tempo, mas nada impressionante",
          stars: 3
        }, {info: "Genial", stars: 4}, {info: "Muito mal escrito!", stars: 2}, {info: "Muito mal escrito!", stars: 2}]
      },
    };
  },
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
