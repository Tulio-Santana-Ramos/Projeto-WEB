<script setup>
import NewAccount from "@/components/NewAccount.vue";
import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
<Menu/>
  <h2 class="title">CRIAR CONTA</h2>
  
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