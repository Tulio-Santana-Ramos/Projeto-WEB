<script setup>
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";
import CreditCard from "@/components/CreditCard.vue";
import DefaultPaymentOption from "@/components/DefaultPaymentOption.vue";
import BlankLine from "@/components/BlankLine.vue";
import Books from "@/components/BagBook.vue";
import { VueCookieNext } from 'vue-cookie-next'

</script>

<template>
  <Menu/>
  <div style="text-align: center; padding-top: 150px; padding-bottom: 20px">
    <span style="color: #38B6FF; font-size: 50px">Finalizar sua compra</span>
  </div>
  <div>
    <div v-if="validateCard()">
      <fieldset>
        <span style="padding-left: 50px" class="normal-text">
          1. Selecione um metodo de pagamento:
        </span>
        <BlankLine/>
        <span style="padding-left: 100px" class="normal-text">
          Seus cartões de crédito:
        </span>
        <div class="card-div" v-for="(card,index) in getCreditCards()">
          <input type="radio" v-bind:name="payment_name" v-bind:value="'0 '+index"/>
          <CreditCard
              :name="card.name"
              :flag="card.flag"
              :code="card.code"
            />
        </div>
        <div style="padding-left: 150px">
          <button type="button" class="btn btn-secondary" @click="appendCard()" style="margin: 10px">+ Adicionar novo cartão</button>
        </div>
        <span class="other-payment"  v-for="(payment, index) in getPaymentForms()">
          <BlankLine/>
          <div style="padding-left: 100px">
            <DefaultPaymentOption
            :name="payment.name"
            :life_time="payment.life_time"
            :input_name="payment_name"
            :index="index+1"
            />
          </div>
        </span>
      </fieldset>
      <div style="padding-left: 150px; align-items: center;; margin: 40px 0;">
        <button type="button" class="btn btn-primary" @click="nextStep()" style="color: white; cursor: pointer;">
          Selecionar forma de pagamento
        </button>
      </div>
    </div>
    <!-- TODO:Confimar compra -->
    <div v-else >
      <div>
        <div>
          <span style="padding-left: 50px" class="normal-text">
              2. Confirme sua compra
          </span>
          <div style="padding-left: 100px" v-for="book in books">
            <Books
                :name="book.name"
                :price="book.price"
                :categories="book.categories"
                :Isinpromo="book.promo"
                :filename="book.img"
            />
          </div>
        </div>
        <div style="padding-left: 50px">
          Total da compra: {{getFullPrice()}}
          <br>
          <button type="button" class="btn btn-primary" @click="nextStep()" style="color: white; cursor: pointer;margin: 20px 0">
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
export default {
  name: "FinishShop",data() {
    return {
      payment_name:"paymentForm",
      books: "",
    };
  },
  mounted: function () {
    this.books = JSON.parse(VueCookieNext.getCookie("books"));
  },
  methods:{
    appendCard(){
    //TODO: fazer essa funcao
    },
    getFullPrice(){
      let full = 0;
      console.log(this.books)
      for (let b of this.books) {
        console.log(b);
        full += parseFloat(b.price);
      }
      return (Math.round(full*100)/100).toFixed(2);
    },
    validateCard(){
      let payment_form = parseInt(this.$route.query.payment_form);
      if(isNaN(payment_form))
        return true;
      let payment_id = parseInt(this.$route.query.id);
      if(isNaN(payment_id))
        return true;
      if(payment_id < 0)
        return false;
    },
    nextStep(){
      let options = document.querySelector('input[name='+this.payment_name+']:checked').value.split(" ");
      this.$router.push({path:"/finalizarCompra/",query:{payment_form:options[0],id:options[1]}});
    },
    getCreditCards(){
      return [
        {name:"Harry Potter",code:1010,flag:"Nubank"},
        {name:"Hermione",code:2020,flag:"Banco do Brasil"}
      ];
    },
    getPaymentForms(){
      return [
        {name:"Boleto",life_time:"1 dia"},
        {name:"Pix",life_time: "30 minutos"}
      ]
    }
  }
}
</script>

<style scoped>
.card-div{
  padding-left: 150px;
}
</style>