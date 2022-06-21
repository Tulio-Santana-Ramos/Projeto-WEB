<script setup>
import Footer from "../components/Footer.vue";
import Menu from "../components/Menu.vue";
import Books from "../components/BagBook.vue";
import {VueCookieNext} from 'vue-cookie-next'
</script>

<template>
  <!-- Div principal da view -->
  <div style="min-height: 559px">
    <Menu :plotDropDown=false />
    <h1 class="titlePage">Carrinho de compras</h1>
    <!-- Div que contem todos os livros do carrinho de compra -->
    <div class="books">
      <div v-for="book in bag">
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
    <!-- Div que contem os botões no final da pagina -->
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
      bag: null // Essa variável vai guardar o carrinho de compras atual
    };
  },
  /**
   * Quando a pagina inicia ja carrega os itens na bag
   */
  mounted() {
    this.getBag();
  },
  methods: {
    /**
     * @returns um objeto JavaScript que tem todas as categorias da loja. A descrição do
     * objeto pode ser encontrada em Estruturas JSON.txt
     */
    getAllCategories() {
      return JSON.parse(localStorage.getItem("categories"))
    },
    /**
     * Se bag não foi definido carrega ela do localStorage,
     * Se bag ja foi definido retorna
     * @returns this.bag
     */
    getBag() {
      if (this.bag === null) { //Verifica se a variável ja foi inicializada
        this.bag = []; //Define como um vetor vazio
        let allCategories = this.getAllCategories();
        let bag = JSON.parse(VueCookieNext.getCookie("bag"));
        for (const book of JSON.parse(localStorage.getItem("books"))) { //Para cada livro na lista de livros ele verifica se está no carrinho
          if (bag !== null)
            for (const bagElem of bag) {
              if (parseInt(book.id) === parseInt(bagElem.id)) {
                let tempCategories = []; //Cria uma variável para converter as categorias numéricas em categorias escritas
                for (const category of book.categories) {
                  for (const fixedCategory of allCategories) {
                    if (category === fixedCategory.id) {
                      tempCategories.push(fixedCategory.name);
                      break;
                    }
                  }
                }
                book.categories = tempCategories;
                this.bag.push(book);//Adiciona o livro no carrinho interno da pagina
              }
            }
          else
            break;
        }
      }
      return this.bag;
    },
    /**
     * Remove um livro do carrinho de compras
     * @param id do livro a ser removido
     */
    removeLivro(id) {
      this.bag = this.bag.filter(function (value) { //Aplica um filtro no vetor para remover um elemento
        return value.id !== id;
      })
      VueCookieNext.setCookie("bag", JSON.stringify(this.bag));
    },
    /**
     * Redefine a pagina atual para /finalizarCompra
     */
    goToFinishShop() {
      this.$router.push("/finalizarCompra");
    },
    /**
     * Redefine a pagina atual para /
     */
    goToHome() {
      this.$router.push("/");
    }
  },
};
</script>


<style scoped>
@import '../assets/base.css';

.titlePage {
  margin: 140px 0 50px 0;
  text-align: center;
  color: #38b6ff;
}

.books {
  padding: 0 2vw;
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
