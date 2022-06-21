<script setup>
import NewAccount from "@/components/NewAccount.vue";
import LoginRequired from "@/components/LoginRequired.vue";
</script>


<!-- Página feita para adicionar um novo admin no sistema -->
<template>
  <!-- Página só consegue ser acessada se o usuário com login já é admin -->
  <div v-if="isAdmin()">
    <img class="admin-pic" src="@/components/icons/admin-with-cogwheels.png" />
    <h2 class="title">CRIAR ADMIN</h2>
    <!-- Campos necessários para cadastro de novo admin com flag indicando que usuário
    a ser cadastro é admin (pois o mesmo componente é usado para cadastro de admin e 
    usuário normal) e a props next page
    passa qual é a próxima rota ao clicar no botão de criar conta -->-->
    <NewAccount :adminReg="true" :nextPage="next" />
  </div>
  <!-- Caso o usuário não esteja logado ou não seja admin não consegue acessar a página-->
  <LoginRequired v-else :text="text"></LoginRequired>
</template>

<script>
import { VueCookieNext } from "vue-cookie-next";

export default {
  name: "app",
  /**
   * verifica se usuário está logado e se é administrador
   */
  methods: {
    /**
     * Retorna se o usuario atual é administrador
     * @returns {boolean}
     */
    isAdmin() {
      let account = VueCookieNext.getCookie("account");
      if (account === null) return false;
      return account.adm === true;
    },
  },
  data() {
    return {
      text: "Para acessar essa página é necessário ser um administrador",
      next: "/gerenciamento",
    };
  },
};
</script>

<style scoped>
.title {
  font-weight: normal;
  text-align: center;
  margin-top: 90px;
  margin-left: 175px;
}

.admin-pic {
  float: right;
  margin-top: 100px;
  margin-right: 50px;
  height: 120px;
}
</style>
