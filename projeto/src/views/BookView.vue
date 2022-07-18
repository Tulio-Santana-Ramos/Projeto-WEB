<script setup>
import Footer from "../components/Footer.vue";
import Menu from "../components/Menu.vue";
import AdminMenu from "../components/AdminMenu.vue";
import BookInfo from "../components/BookInfo.vue";
import Evaluation from "../components/avaliationResult.vue";
</script>


<template>
  <!-- Seleciona qual menu deve colocar -->
  <AdminMenu v-if="isAdmin()" :plotDropDown="false" />
  <Menu v-else :plotDropDown="false" />
  <!-- Se for ADM coloca os botões de gerenciamento do livro-->
  <div class="adm-operations" v-if="isAdmin()">
    <!-- Botão para adicionar a promoção ao livro -->
    <button class="add-book" data-bs-target="#modalAddPromo" data-bs-toggle="modal">
      <img src="../components/icons/addition.png" style="width: 50px; height: 50px;" alt=""/>
      Adicionar promoção
    </button>
    <!-- Um modal para adicionar a promoção do livro -->
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
            <!-- Div para colocar todos os inputs da promoção -->
            <div>
              <div class="input-group input-container">
                    <span class="input-group-text" style="width: 87px;">
                      Qntd
                    </span>
                <input class="form-control" placeholder="Quantos livros colocar em promoção"
                       style="width: 350px;height: 45px;font-size: medium"
                       ref="input_qntd">
              </div>
              <p/>
              <div class="input-group input-container">
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
            <button class="btn btn-primary" data-bs-dismiss="modal"
                    @click="addPromo(this.$refs.input_qntd.value,this.$refs.input_valor.value)" type="button">Adicionar
            </button>
            <button class="btn btn-danger" data-bs-dismiss="modal" type="button">Cancelar</button>
          </div>

        </div>
      </div>
    </div>
    <!-- Botão para remover o livro da base de dados -->
    <button class="remove-book" data-bs-target="#modalRemLivro" data-bs-toggle="modal">
      <img src="../components/icons/remove.png" style="width: 50px; height: 50px;" alt=""/>
      Excluir livro
    </button>
    <!-- Um modal para confirmar a remoção do livro -->
    <div id="modalRemLivro" class="modal" style="margin-top: 200px;">
      <div class="modal-dialog" style="min-width: 550px">
        <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Remover livro da base de dados</h4>
            <button class="btn-close" data-bs-dismiss="modal" type="button"></button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <div>
              <span style="color: red">
                Atenção! <br> Esta ação é irreversível, tem certeza que deseja realiza-la?
              </span>
            </div>
          </div>

          <!-- Modal footer -->
          <div class="modal-footer">
            <button class="btn btn-primary" data-bs-dismiss="modal" @click="remLivro()" type="button">Sim, excluir
            </button>
            <button class="btn btn-danger" data-bs-dismiss="modal" type="button">Cancelar</button>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div>
    <!-- Coloca todas as informações do livro na tela-->
    <BookInfo
      :atClick="addToBag"
      :id="this.$route.query.id"
      :inBag="searchInBag(this.$route.query.id)"
      :inLib="searchInLib(this.$route.query.id)"
    />
  </div>
  <!-- Div para mostrar as avaliações dos livros-->
  <div class="book-stats">
    <div v-for="evaluation in all_books.evaluations">
      <div class="evaluation">
        <star-rating v-bind:rating=evaluation.stars :star-size="30" :read-only="true"></star-rating>
        <p>{{ evaluation.info }} </p>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
import {VueCookieNext} from "vue-cookie-next";
import axios from "axios";

export default {
  name: 'app',
  async mounted(){

    const res_books = await axios.get("http://localhost:3000/api/book/id="+this.$route.query.id);
    this.all_books = res_books.data;

    let acc = VueCookieNext.getCookie("account");
    if (acc !== undefined && acc !== null) {
      const res_lib = await axios.get("http://localhost:3000/api/lib/id="+acc.id);
      this.lib = res_lib.data;
      console.log(this.lib)
    }
    const res_cat = await axios.get("http://localhost:3000/api/category/");
    this.categories = res_cat.data;
    let id = this.$route.query.id;
  },
  methods: {
    /**
     * Se o livro tiver promoção aumenta, se não tiver cria
     * @param {string} quantidadePromocional define a promoção a ser somada
     * @param {string} valorPromocional define o novo valor promocional
     */ async addPromo(quantidadePromocional, valorPromocional) {
      if (!this.all_books.promo.is) { // Se não tem promoção cria
        let promo = {}
        promo.is = true;
        promo.numberBooks = quantidadePromocional;
        promo.tempPrice = valorPromocional;
        this.all_books.promo = promo;
      } else { // Se não, adiciona
        this.all_books.promo.numberBooks = parseInt(this.all_books.promo.numberBooks) + parseInt(quantidadePromocional);
        this.all_books.promo.tempPrice = valorPromocional;
      }
      let res = await fetch("http://localhost:3000/api/book/id=" + this.all_books.id, {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.all_books)
      });
      if (res.status !== 200)
        console.log("Deu errado")
      this.$router.go(0)
    },
    /**
     * Remove o livro da base de dados
     */ async remLivro() {
      let res = await fetch("http://localhost:3000/api/book/id=" + this.all_books._id, {
        method: "DELETE",
        headers: {'Content-Type': 'application/json'},
        body: ""
      });
      if (res.status !== 200)
        console.log("Deu errado");
      await this.$router.push("/"); // Redefine a rota para a home
    },
    /**
     * Verifica se o livro está na biblioteca
     * @param id Id para ser verificado
     * @returns {boolean} retorna se o livro está na biblioteca
     */
    searchInLib(id) {
      let acc = VueCookieNext.getCookie("account");
      if (acc === undefined || acc === null)
        return false;
      console.log(this.lib.lib)
      console.log(id)

      for (const book in this.lib.lib) {
        console.log(book)
        console.log(this.lib.lib[book].id)
        if (this.lib.lib[book].id === parseInt(id) ){
          return true;
        }
      }
      return false;
    },
    /**
     * Verifica se o livro está no carrinho de compras
     * @param id Id para ser verificado
     * @returns {boolean} retorna se o livro está no carrinho
     */
    searchInBag(id) {
      let bag = JSON.parse(VueCookieNext.getCookie("bag"));
      if(bag !== null) {
        for (const book of bag) {
          if (parseInt(book.id) === parseInt(id))
            return true;
        }
      }
      return false;
    },
    /**
     * Analisa o ‘cookie’ que guarda a conta atual e retorna se é uma conta de administrador ou não
     * @returns {boolean} true se a conta é de administrador, false se não está logado ou se não é administrador
     */
    isAdmin() {
      let account = VueCookieNext.getCookie("account");
      if (account === null)
        return false;
      return account.adm === true;
    },
    /**
     * Retorna todas as categorias na base de dados
     */
    getAllCategories() {
      return this.categories;
    },
    /**
     * Retorna o livro atual com todas as categorias ja convertidas para texto
     */
    getBookDetails() {
      let books = this.all_books;
      let id = this.$route.query.id;
      let allCategories = this.getAllCategories();
      for (let book of books) {
        if (parseInt(book.id) === parseInt(id)) {
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
          this.all_books = book;
          return book;
        }
      }
    },
    /**
     * Adiciona um livro ao carrinho de compras
     * @param idLivro id do livro a ser adicionado
     */
    addToBag(idLivro) {
      if (this.searchInBag(idLivro))
        return;
      let bag = JSON.parse(VueCookieNext.getCookie("bag"));
      let newBook = {id: idLivro};
      if(bag !== null) // Se o carrinho não existe, cria
        bag.push(newBook);
      else
        bag = [newBook];
      let temp = JSON.stringify(bag);
      VueCookieNext.setCookie("bag", temp);
    }
  },
  data() {
    return {
      all_books: {},//Livro que esta sendo exibido
      categories:[],
      lib:[]
    };
  },
};
</script>

<style scoped>

.book-stats {
  color: black;
  font-size: 1.25em;
  margin-top: 5px;
  margin-bottom: 10px;
  border-style: solid;
  border-color: #38b6ff #fff #fff #fff;
}

.adm-operations {
  float: right;
  text-align: justify;
  text-align-last: right;
  padding-right: 25%;
  font-size: large;
  font-family: "Grape Nuts", cursive,  "Open Sans", sans-serif;
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
