<script setup>
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";
import CreditCard from "@/components/CreditCard.vue";
import DefaultPaymentOption from "@/components/DefaultPaymentOption.vue";
import BlankLine from "@/components/BlankLine.vue";
import Books from "@/components/BagBook.vue";
import {VueCookieNext} from 'vue-cookie-next'

</script>

<template>
  <div style="min-height: calc(100vh - 270px)">
    <Menu
        :plotDropDown="false"
    />
    <div style="text-align: center; padding-top: 150px; padding-bottom: 20px">
      <span style="color: #38B6FF; font-size: 50px">Finalizar sua compra</span>
    </div>
    <div>
      <div v-if="validateCard()">
        <fieldset>
          <div v-if="hadUser()">
            <span class="normal-text" style="padding-left: 50px">
          1. Selecione um metodo de pagamento:
        </span>
            <BlankLine/>
          <span class="normal-text" style="padding-left: 100px">
            Seus cartões de crédito:
          </span>
            <div v-for="(card,index) in getCreditCards()" class="card-div">
              <input type="radio" v-bind:name="payment_name" v-bind:value="'0 '+index"/>
              <CreditCard
                  :code="card.code"
                  :flag="card.flag"
                  :name="card.name"
              />
            </div>
            <div style="padding-left: 150px">
              <button class="btn btn-secondary" data-bs-target="#modalCard" data-bs-toggle="modal" style="margin: 10px"
                      type="button">+ Adicionar novo cartão
              </button>
            </div>

            <!-- The Modal -->
            <div id="modalCard" class="modal" style="margin-top: 200px">
              <div class="modal-dialog">
                <div class="modal-content">

                  <!-- Modal Header -->
                  <div class="modal-header">
                    <h4 class="modal-title">Adicionar novo cartão</h4>
                    <button class="btn-close" data-bs-dismiss="modal" type="button"></button>
                  </div>

                  <!-- Modal body -->
                  <div class="modal-body">
                    <div>
                      <div class="input-group input-container">
                      <span class="input-group-text" style="width: 87px;">
                        Nome
                      </span>
                        <input class="form-control" placeholder="Nome do titular"
                               style="width: 350px;height: 45px;font-size: medium"
                               ref="input_nome">
                      </div>
                      <br>
                      <div class="input-group input-container" style="margin-right: auto; margin-left: auto;">
                      <span class="input-group-text">
                        Bandeira
                      </span>
                        <input class="form-control" placeholder="Bandeira do cartão"
                               style="height: 45px;font-size: medium"
                               type="text" ref="input_bandeira">
                      </div>
                      <br>
                      <div class="input-group input-container" style="margin-right: auto; margin-left: auto;">
                      <span class="input-group-text" style="width: 87px">
                        Numero
                      </span>
                        <input class="form-control" placeholder="Número do cartão"
                               style="height: 45px;font-size: medium"
                               type="number" ref="input_num">
                      </div>
                    </div>
                  </div>

                  <!-- Modal footer -->
                  <div class="modal-footer">
                    <button class="btn btn-primary" data-bs-dismiss="modal"
                            @click="addCard(this.$refs.input_nome.value,this.$refs.input_bandeira.value,this.$refs.input_num.value)"
                            type="button">Adicionar
                    </button>
                    <button class="btn btn-danger" data-bs-dismiss="modal" type="button">Cancelar</button>
                  </div>

                </div>
              </div>
            </div>
            <span v-for="(payment, index) in getPaymentForms()" class="other-payment">
              <BlankLine/>
              <div style="padding-left: 100px">
                <DefaultPaymentOption
                    :index="index+1"
                    :input_name="payment_name"
                    :life_time="payment.life_time"
                    :name="payment.name"
                />
              </div>
            </span>
            <div style="padding-left: 150px; align-items: center;; margin: 40px 0;">
              <button class="btn btn-primary" style="color: white; cursor: pointer;" type="button" @click="nextStep()">
                Selecionar forma de pagamento
              </button>
            </div>
          </div>


            <div v-else style="padding-left: 100px">
            Para comprar é necessario fazer login:
            <button class="btn btn-primary" data-bs-dismiss="modal" type="button" @click="this.$router.push('/login')">
              Login
            </button>
          </div>

        </fieldset>

      </div>
      <div v-else>
        <div>
          <div>
          <span class="normal-text" style="padding-left: 50px">
              2. Confirme sua compra
          </span>
            <div v-for="book in getBag()" style="padding-left: 100px">
              <Books
                  :Isinpromo="book.promo"
                  :categories="book.categories"
                  :name="book.name"
                  :id="book.id"
                  :price="book.price"
                  :promotion="book.promo"
                  :action="removeLivro"
              />
            </div>
          </div>
          <div style="padding-left: 50px">
            Total da compra: {{ getFullPrice() }}
            <br>
            <button class="btn btn-primary" style="color: white; cursor: pointer;margin: 20px 0" type="button"
                    @click="finishShop()">
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
    <button data-bs-target="#modalLogin" data-bs-toggle="modal"
            style="border-width:0;width: 0;height: 0; cursor: default"
            type="button" ref="modalButton"/>

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
            <button class="btn btn-primary" data-bs-dismiss="modal" type="button" @click="this.$router.push('/login')">
              Login
            </button>
            <button class="btn btn-primary" data-bs-dismiss="modal" type="button"
                    @click="this.$router.push('/novousuario')">Cadastre-se
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
import {VueCookieNext} from "vue-cookie-next";

export default {
  name: "FinishShop",
  data() {
    return {
      payment_name: "paymentForm",
      bag: null
    };
  },
  methods: {
    hadUser() {
      return VueCookieNext.getCookie("account") !== null;
    },
    addCard(nome, bandeira, numero) {
      let newCard = {};
      newCard.name = nome;
      newCard.code = parseInt(numero);
      newCard.flag = bandeira;
      let acc = VueCookieNext.getCookie("account");
      if (acc === null) {
        return '';
      }
      let accs = JSON.parse(localStorage.getItem("accounts"));
      for (const accBD in accs) {
        if (acc.id === accs[accBD].id)
          accs[accBD].cards.push(newCard);
      }
      localStorage.setItem("accounts", JSON.stringify(accs));
      this.$router.go(0);
    },
    removeLivro(id) {
      VueCookieNext.setCookie("bag", JSON.stringify(this.getBag().filter(function (value) {
        return value.id !== id;
      })));
      this.$router.go(0);
    },
    getFullPrice() {
      let full = 0;
      for (let b of this.getBag()) {
        if (b.promo.is)
          full += parseFloat(b.promo.tempPrice);
        else
          full += parseFloat(b.price);
      }
      return (Math.round(full * 100) / 100).toFixed(2);
    },
    validateCard() {
      let payment_form = parseInt(this.$route.query.payment_form);
      if (isNaN(payment_form))
        return true;
      let payment_id = parseInt(this.$route.query.id);
      if (isNaN(payment_id))
        return true;
      if (payment_id < 0)
        return false;
    },
    getAllCategories() {
      return JSON.parse(localStorage.getItem("categories"))
    },
    getBag() {
      if (this.bag === null) {
        this.bag = [];
        let allCategories = this.getAllCategories();
        for (const book of JSON.parse(localStorage.getItem("books"))) {
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
    nextStep() {
      let options = document.querySelector('input[name=' + this.payment_name + ']:checked').value.split(" ");
      this.$router.push({path: "/finalizarCompra/", query: {payment_form: options[0], id: options[1]}});
    },
    getCreditCards() {
      let acc = VueCookieNext.getCookie("account");
      if (acc === null) {
        return '';
      }
      for (const accBD of JSON.parse(localStorage.getItem("accounts"))) {
        if (acc.id === accBD.id)
          return accBD.cards;
      }
      return [];
    },
    getPaymentForms() {
      return JSON.parse(localStorage.getItem("payment_forms"));
    },
    finishShop() {
      let user = VueCookieNext.getCookie("account");
      if (user === null) {
        this.$refs.modalButton.click();
      }
      let updateBookList = false;
      let bag = this.getBag();
      if(bag === null)
        this.$router.push("/");
      let toAddInLib = [];
      for (const book of bag) {
        let nextBook = {};
        nextBook.id = book.id;
        nextBook.eval = false;
        toAddInLib.push(nextBook);
        if (book.promo.is) {
          updateBookList = true;
          book.promo.numberBooks--;
          if (book.promo.numberBooks <= 0) {
            book.promo.is = false;
            book.promo.tempPrice = 0;
            book.promo.numberBooks = 0;
          }
        }
      }
      if (updateBookList) {
        let books = JSON.parse(localStorage.getItem("books"));
        for (let i = 0; i < books.length; i++) {
          for (let buyBook of bag) {
            if (books[i].id === buyBook.id)
              books[i].promo = buyBook.promo;
          }
        }
        localStorage.setItem("books", JSON.stringify(books));
      }
      let libs = JSON.parse(localStorage.getItem("libraries"));
      let actualLib = null;
      let libID = -1;
      console.log(libs);
      for (let i = 0; i < libs.length; i++) {
        console.log(libs[i]);
        if (libs[i].user === user.id) {
          actualLib = libs[i].lib;
          libID = i;
        }
      }
      if (actualLib === null)
        actualLib = [];
      for (const bookToAdd of toAddInLib) {
        actualLib.push(bookToAdd);
      }
      console.log(actualLib);
      if(libID === -1){
        let newLib = {};
        newLib.user = user.id;
        newLib.lib = actualLib;
        libs.push(newLib);
      }else{
        libs[libID].lib = actualLib;
      }
      localStorage.setItem("libraries",JSON.stringify(libs));
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
    }
  }
}
</script>

<style scoped>
.card-div {
  padding-left: 150px;
}
</style>