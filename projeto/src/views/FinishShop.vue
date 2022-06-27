<script setup>
import Footer from "../components/Footer.vue";
import Menu from "../components/Menu.vue";
import CreditCard from "../components/CreditCard.vue";
import DefaultPaymentOption from "../components/DefaultPaymentOption.vue";
import BlankLine from "../components/BlankLine.vue";
import Books from "../components/BagBook.vue";
import { VueCookieNext } from "vue-cookie-next";
</script>

<template>
  <!-- Div com toda a finalização da compra -->
  <div style="min-height: calc(100vh - 270px)">
    <Menu :plotDropDown="false" />
    <div style="text-align: center; padding-top: 150px; padding-bottom: 20px">
      <span style="color: #38b6ff; font-size: 50px">Finalizar sua compra</span>
    </div>
    <div>
      <!-- verifica em qual parte da finalização da compra está -->
      <!-- se estiver na parte 1 -->
      <div v-if="verifyState()">
        <span style="margin-left: 50px; font-size: large"
          >Os livros já são quase seus: 1/2</span
        >
        <div
          style="
            width: 45%;
            background-color: #0b859f;
            height: 10px;
            margin-left: 50px;
          "
        />
        <br />
        <!-- fieldset para fazer todas os radios funcionarem juntos -->
        <fieldset>
          <!-- Se não foi feito o login não permite a compra -->
          <div v-if="hadUser()">
            <span class="normal-text" style="padding-left: 50px">
              1. Selecione um método de pagamento:
            </span>
            <BlankLine />
            <span class="normal-text" style="padding-left: 100px">
              Seus cartões de crédito:
            </span>
            <!-- coloca todos os cartões de créditos -->
            <div v-for="(card, index) in getCreditCards()" class="card-div">
              <input
                type="radio"
                v-bind:name="payment_name"
                v-bind:value="'0 ' + index"
              />
              <CreditCard :code="card.code" :name="card.name" />
            </div>
            <!-- Div para adicionar um cartão ao usuário -->
            <div style="padding-left: 150px">
              <button
                class="btn btn-secondary"
                data-bs-target="#modalCard"
                data-bs-toggle="modal"
                style="margin: 10px"
                type="button"
              >
                + Adicionar novo cartão
              </button>
            </div>
            <!-- Modal para adicionar um novo cartão -->
            <div id="modalCard" class="modal" style="margin-top: 200px">
              <div class="modal-dialog">
                <div class="modal-content">
                  <!-- Modal Header -->
                  <div class="modal-header">
                    <h4 class="modal-title">Adicionar novo cartão</h4>
                    <button
                      class="btn-close"
                      data-bs-dismiss="modal"
                      type="button"
                    ></button>
                  </div>

                  <!-- Modal body -->
                  <div class="modal-body">
                    <div>
                      <div class="input-group input-container">
                        <span class="input-group-text" style="width: 87px">
                          Nome
                        </span>
                        <input
                          ref="input_nome"
                          class="form-control"
                          placeholder="Nome do titular"
                          style="width: 350px; height: 45px; font-size: medium"
                          v-model="this.inputName"
                        />
                      </div>
                      <br />
                      <div
                        class="input-group input-container"
                        style="margin-right: auto; margin-left: auto"
                      >
                        <span class="input-group-text"> Validade </span>
                        <input
                          ref="input_validade"
                          class="form-control"
                          placeholder="Bandeira do cartão"
                          style="height: 45px; font-size: medium"
                          type="date"
                          v-model="this.inputExpiration"
                        />
                      </div>
                      <br />
                      <div
                        class="input-group input-container"
                        style="margin-right: auto; margin-left: auto"
                      >
                        <span class="input-group-text" style="width: 87px">
                          CVV
                        </span>
                        <input
                          ref="input_CVV"
                          class="form-control"
                          placeholder="CVV"
                          style="height: 45px; font-size: medium"
                          type="number"
                          v-model="this.inputCVV"
                        />
                      </div>
                      <br />
                      <div
                        class="input-group input-container"
                        style="margin-right: auto; margin-left: auto"
                      >
                        <span class="input-group-text" style="width: 87px">
                          Numero
                        </span>
                        <input
                          ref="input_num"
                          class="form-control"
                          placeholder="Número do cartão"
                          style="height: 45px; font-size: medium"
                          type="number"
                          v-model="this.inputNumero"
                        />
                      </div>
                    </div>
                  </div>

                  <!-- Modal footer -->
                  <div class="modal-footer">
                    <button
                      class="btn btn-primary"
                      data-bs-dismiss="modal"
                      type="button"
                      ref="btnAddCard"
                      disabled
                      @click="
                        addCard(
                          this.$refs.input_nome.value,
                          this.$refs.input_validade.value,
                          this.$refs.input_CVV.value,
                          this.$refs.input_num.value
                        )
                      "
                    >
                      Adicionar
                    </button>
                    <button
                      class="btn btn-danger"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Span para adicionar as outra formas de pagamento-->
            <span
              v-for="(payment, index) in getPaymentForms()"
              class="other-payment"
            >
              <BlankLine />
              <span style="padding-left: 100px">
                <DefaultPaymentOption
                  :index="index + 1"
                  :input_name="payment_name"
                  :life_time="payment.life_time"
                  :name="payment.name"
                />
              </span>
            </span>
            <!-- Botão para efetivar a escolha de pagamento -->
            <div
              style="padding-left: 150px; align-items: center; margin: 40px 0"
            >
              <button
                class="btn btn-primary"
                style="color: white; cursor: pointer"
                type="button"
                @click="nextStep()"
              >
                Selecionar forma de pagamento
              </button>
            </div>
          </div>
          <!-- Se não estiver logado mostra essa tela -->
          <div v-else style="padding-left: 100px; font-size: large">
            Para comprar é necessário fazer login:
            <button
              class="btn btn-primary"
              data-bs-dismiss="modal"
              type="button"
              @click="this.$router.push('/login')"
            >
              Login
            </button>
          </div>
        </fieldset>
      </div>
      <!-- se estiver na parte 2 (final) -->
      <div v-else>
        <div>
          <div>
            <span style="margin-left: 50px; font-size: large"
              >Os livros já são quase seus: 2/2</span
            >
            <div
              style="
                width: 95%;
                background-color: #0b859f;
                height: 10px;
                margin-left: 50px;
              "
            />
            <br />
            <span class="normal-text" style="padding-left: 50px">
              2. Confirme sua compra
            </span>
            <!-- Div com todos os livros do carrinho -->
            <div v-for="book in getBag()" style="padding-left: 100px">
              <Books
                :id="book.id"
                :Isinpromo="book.promo"
                :action="removeLivro"
                :categories="book.categories"
                :name="book.name"
                :price="book.price"
                :promotion="book.promo"
              />
            </div>
          </div>
          <!-- Div para mostrar o total da compra e finalizar a compra-->
          <div style="padding-left: 50px">
            Total da compra: {{ getFullPrice() }}
            <br />
            <button
              class="btn btn-primary"
              style="color: white; cursor: pointer; margin: 20px 0"
              type="button"
              @click="finishShop()"
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import { VueCookieNext } from "vue-cookie-next";

export default {
  name: "FinishShop",
  data() {
    return {
      payment_name: "paymentForm",
      bag: null, // lista atual do carrinho de compra
      inputName: "",
      inputCVV: "",
      inputExpiration: "",
      inputNumero: ""
    };
  },
  watch:{
      inputName(novo,velho){
        this.onUpdateFieldCard();
      },
      inputCVV(novo,velho){
        this.onUpdateFieldCard();
      },
      inputExpiration(){
        this.onUpdateFieldCard();
      },
      inputNumero(){
        this.onUpdateFieldCard();
      }

  },
  mounted() {
    this.getBag();
  },
  methods: {
    /**
     * Verifica se o usuário está logado
     * @returns {boolean} Retorna false se o usuário não está logado
     */
    hadUser() {
      return VueCookieNext.getCookie("account") !== null;
    },
    /**
     * Adiciona o cartão à conta do usuário
     * @param nome nome do dono do cartão
     * @param validade validade do cartão
     * @param CVV CVV do cartão
     * @param numero numero do cartão
     */
    addCard(nome, validade,CVV, numero) {
      let newCard = {};

      const zeros = "0000000000000000";
      newCard.name = nome;
      if(numero.length < 16)
        newCard.code = zeros.substring(numero.length,16) + numero;
      else
        newCard.code = numero.substring(0,16);
      newCard.expiration = validade;
      if(CVV.length < 3)
        newCard.CVV = zeros.substring(CVV.length,3) + CVV
      else
        newCard.CVV = CVV.substring(0,3);
      let acc = VueCookieNext.getCookie("account");
      if (acc === null) {
        return;
      }
      let accounts = JSON.parse(localStorage.getItem("accounts"));
      for (const accBD in accounts) {
        if (acc.id === accounts[accBD].id) accounts[accBD].cards.push(newCard);
      }
      localStorage.setItem("accounts", JSON.stringify(accounts));
      this.$router.go(0);
    },
    /**
     * Remove um livro do carrinho de compras
     * @param id do livro a ser removido
     */
    removeLivro(id) {
      this.bag = this.bag.filter(function (value) {
        //Aplica um filtro no vetor para remover um elemento
        return value.id !== id;
      });
      VueCookieNext.setCookie("bag", JSON.stringify(this.bag));
    },
    /**
     * Retorna a soma dos valores da compra
     */
    getFullPrice() {
      let full = 0;
      for (let b of this.getBag()) {
        if (b.promo.is) full += parseFloat(b.promo.tempPrice);
        else full += parseFloat(b.price);
      }
      return (Math.round(full * 100) / 100).toFixed(2);
    },
    /**
     * Verifica em qual estado da compra esta
     * @returns {boolean} retorna True se está na primeira fase
     */
    verifyState() {
      let payment_form = parseInt(this.$route.query.payment_form);
      if (isNaN(payment_form)) return true;
      let payment_id = parseInt(this.$route.query.id);
      if (isNaN(payment_id)) return true;
      if (payment_id < 0) return false;
    },
    /**
     * Retorna todas as categorias da base de dados
     */
    getAllCategories() {
      return JSON.parse(localStorage.getItem("categories"));
    },
    /**
     * Se bag não foi definido carrega ela do localStorage,
     * Se bag ja foi definido retorna
     * @returns this.bag
     */
    getBag() {
      if (this.bag === null) {
        //Verifica se a variável ja foi inicializada
        this.bag = []; //Define como um vetor vazio
        let allCategories = this.getAllCategories();
        let bag = JSON.parse(VueCookieNext.getCookie("bag"));
        for (const book of JSON.parse(localStorage.getItem("books"))) {
          //Para cada livro na lista de livros ele verifica se está no carrinho
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
                this.bag.push(book); //Adiciona o livro no carrinho interno da pagina
              }
            }
          else break;
        }
      }
      return this.bag;
    },
    /**
     * Passa para a próxima fase de compra
     */
    nextStep() {
      let options = document
        .querySelector("input[name=" + this.payment_name + "]:checked")
        .value.split(" ");
      this.$router.push({
        path: "/finalizarCompra/",
        query: { payment_form: options[0], id: options[1] },
      });
    },
    /**
     * Retorna todos os cartões do usuário logado
     */
    getCreditCards() {
      let acc = VueCookieNext.getCookie("account");
      if (acc === null) {
        return "";
      }
      for (const accBD of JSON.parse(localStorage.getItem("accounts"))) {
        if (acc.id === accBD.id) return accBD.cards;
      }
      return [];
    },
    /**
     * Retorna as formas de pagamento
     */
    getPaymentForms() {
      return JSON.parse(localStorage.getItem("payment_forms"));
    },
    /**
     * Finaliza a compra do usuário e salva as variáveis importantes
     */
    finishShop() {
      let user = VueCookieNext.getCookie("account");
      let updateBookList = false; // verifica se algum livro comprado é promocional
      let bag = this.getBag(); // Se o carrinho de compras está vazio volta para a home
      if (bag === null) this.$router.push("/");
      let toAddInLib = []; // Vetor para adicionar à biblioteca
      for (const book of bag) {
        // verifica todos os livros do carrinho de compra
        let nextBook = {};
        nextBook.id = book.id;
        nextBook.eval = false;
        toAddInLib.push(nextBook);
        if (book.promo.is) {
          // Se o livro é promocional diminui a quantidade da promoção
          updateBookList = true;
          book.promo.numberBooks--;
          if (book.promo.numberBooks <= 0) {
            // Se a promoção acabou remove a promoção
            book.promo.is = false;
            book.promo.tempPrice = 0;
            book.promo.numberBooks = 0;
          }
        }
      }
      if (updateBookList) {
        // Se algum livro era promocional atualiza os livros
        let books = JSON.parse(localStorage.getItem("books"));
        for (let i = 0; i < books.length; i++) {
          for (let buyBook of bag) {
            if (books[i].id === buyBook.id) books[i].promo = buyBook.promo;
          }
        }
        localStorage.setItem("books", JSON.stringify(books));
      }
      //Adiciona os novos livros à biblioteca
      let libs = JSON.parse(localStorage.getItem("libraries"));
      let actualLib = null;
      let libID = -1;
      for (let i = 0; i < libs.length; i++) {
        if (libs[i].user === user.id) {
          actualLib = libs[i].lib;
          libID = i;
        }
      }
      if (actualLib === null) actualLib = [];
      for (const bookToAdd of toAddInLib) {
        actualLib.push(bookToAdd);
      }
      if (libID === -1) {
        let newLib = {};
        newLib.user = user.id;
        newLib.lib = actualLib;
        libs.push(newLib);
      } else {
        libs[libID].lib = actualLib;
      }
      localStorage.setItem("libraries", JSON.stringify(libs));
      // Salva as compras para os relatórios
      let oldBuys = JSON.parse(localStorage.getItem("buys"));
      let newBuy = {};
      let accounts = JSON.parse(localStorage.getItem("accounts"));
      for (const userAcc of accounts) {
        if (parseInt(userAcc.id) === parseInt(user.id)) {
          newBuy.name = userAcc.name;
          break;
        }
      }
      newBuy.value = this.getFullPrice();
      oldBuys.push(newBuy);
      VueCookieNext.setCookie("bag", "");
      localStorage.setItem("buys", JSON.stringify(oldBuys));
      this.$router.push("/");
    },
    onUpdateFieldCard(){
      let validation = this.$refs.input_nome.value == "" || this.$refs.input_validade.value  == "" || this.$refs.input_CVV.value  == "" || this.$refs.input_num.value == "" ;
      this.$refs.btnAddCard.disabled = validation
    }
  },
};
</script>

<style scoped>
.card-div {
  padding-left: 150px;
}
</style>
