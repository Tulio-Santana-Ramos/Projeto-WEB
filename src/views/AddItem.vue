<script setup>
import Footer from "../components/Footer.vue";
import AdminMenu from "../components/AdminMenu.vue";
import Menu from "../components/Menu.vue";
import LoginRequired from "../components/LoginRequired.vue";
import AddBook from "../components/AddBook.vue";
</script>

<template>
  <div v-if="isAdmin()" style="min-height: 511px">
    <AdminMenu :plotDropDown=false />
    <!-- Toast para quando o livro é adicionado -->
    <div class="toast-container position-fixed bottom-0 end-0 p-3 " style="z-index: 1000; ">
      <div class="toast" id="liveToast" ref="toast">
        <div class="toast-header">
          <strong class="me-auto">Livro adicionado</strong>
          <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
        </div>
        <div class="toast-body">
          <p>O livro foi adicionado</p>
        </div>
      </div>
    </div>
    <h1 class="titlePage">Adicionar Livro</h1>
    <AddBook :propagateChanges="showToast" />
  </div>
  <div style="min-height: 699px" v-else>
    <Menu :plotDropDown=false />
    <LoginRequired :text="text"/>
  </div>
  <Footer/>
</template>

<script>
import {VueCookieNext} from "vue-cookie-next";

export default {
  name: "app",
  data() {
    return {
      text: "Para acessar essa página é necessário ser um administrador",
    };
  },
  methods: {
    /**
     * Analisa o ‘cookie’ que guarda a conta atual e retorna se é uma conta de administrador ou não
     * @returns true se a conta é de administrador, false se não está logado ou se não é administrador
     */
    isAdmin() {
      let account = VueCookieNext.getCookie("account");
      if (account === null)//Se não foi feito o login esse cookie da null
        return false;
      return account.adm === true;
    },
    /**
     * "Liga" o Toast que mostra que um livro foi adicionado
     */
    showToast() {
      this.$refs.toast.classList.add("show");//Pega a referência na página da Div do Toast e adiciona a classe "show" para ativar o elemento
      setTimeout(() => {//Define um timeout para desativar o Toast depois de 5 segundos
        this.$refs.toast.classList.remove("show");
      }, 5000);
    },
  }
};
</script>

<style scoped>
@import "../assets/base.css";

.titlePage {
  color: #38b6ff;
  margin-top: 150px;
  text-align: center;
}
</style>
