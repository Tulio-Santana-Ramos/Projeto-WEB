<script setup>
import NewAccount from "@/components/NewAccount.vue";
import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";
</script>


<!-- Página feita para adicionar um novo usuário no sistema -->
<template>
<Menu/>
  <h2 class="title">CRIAR CONTA</h2>
  
  <!-- Campos necessários para cadastro de novo usuário com flag indicando que usuário
  a ser cadastro não é admin (pois o mesmo componente é usado para cadastro de admin e 
  usuário normal), e a props next page
  passa qual é a próxima rota ao clicar no botão de criar conta -->
  <NewAccount
      :adminReg=false
      :nextPage="next"
  />

  <Footer/>
  
</template>
<script>
export default {
  data() {
    return {
      next: "/login"
    }
  }
};
</script>
<style scoped>

.title{
  text-align:center;
  color: #38B6FF;
  padding-top:140px;
}

</style>