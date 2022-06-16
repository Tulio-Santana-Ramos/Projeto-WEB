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
  <Menu/>
  <div style="text-align: center; padding-top: 150px; padding-bottom: 20px">
    <span style="color: #38B6FF; font-size: 50px">Finalizar sua compra</span>
  </div>
  <div>
    <div v-if="validateCard()">
      <fieldset>
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
                    <input class="form-control" placeholder="Bandeira do cartão" style="height: 45px;font-size: medium"
                           type="text" ref="input_bandeira">
                  </div>
                  <br>
                  <div class="input-group input-container" style="margin-right: auto; margin-left: auto;">
                    <span class="input-group-text" style="width: 87px">
                      Numero
                    </span>
                    <input class="form-control" placeholder="Número do cartão" style="height: 45px;font-size: medium"
                           type="number" ref="input_num">
                  </div>
                </div>
              </div>

              <!-- Modal footer -->
              <div class="modal-footer">
                <button class="btn btn-primary" data-bs-dismiss="modal" @click="addCard(this.$refs.input_nome.value,this.$refs.input_bandeira.value,this.$refs.input_num.value)" type="button">Adicionar</button>
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
      </fieldset>
      <div style="padding-left: 150px; align-items: center;; margin: 40px 0;">
        <button class="btn btn-primary" style="color: white; cursor: pointer;" type="button" @click="nextStep()">
          Selecionar forma de pagamento
        </button>
      </div>
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
                :filename="book.img"
                :name="book.name"
                :id="book.id"
                :price="book.price"
                :action="removeLivro"
            />
          </div>
        </div>
        <div style="padding-left: 50px">
          Total da compra: {{ getFullPrice() }}
          <br>
          <button class="btn btn-primary" style="color: white; cursor: pointer;margin: 20px 0" type="button"
                  @click="nextStep()">
            Finalizar Compra
          </button>
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
    addCard(nome,bandeira,numero) {
      let newCard = {};
      newCard.name = nome;
      newCard.code = parseInt(numero);
      newCard.flag = bandeira;
      let temp = JSON.parse(localStorage.getItem("cards"))
      temp.push(newCard)
      localStorage.setItem("cards",JSON.stringify(temp));
      this.$router.go(0);
    },
    removeLivro(id){
      VueCookieNext.setCookie("bag",JSON.stringify(this.getBag().filter(function(value){
        return value.id !== id;
      })));
      this.$router.go(0);
    },
    getFullPrice() {
      let full = 0;
      console.log(this.getBag());
      for (let b of this.getBag()) {
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
    getBag(){
      if(this.bag === null) {
        this.bag = [];
        for (const book of JSON.parse(localStorage.getItem("books"))) {
          for (const bagElem of JSON.parse(VueCookieNext.getCookie("bag"))) {
            if (parseInt(book.id) === parseInt(bagElem.id)) {
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
      return JSON.parse(localStorage.getItem("cards"));
    },
    getPaymentForms() {
      return JSON.parse(localStorage.getItem("payment_forms"));
    }
  }
}
</script>

<style scoped>
.card-div {
  padding-left: 150px;
}
</style>