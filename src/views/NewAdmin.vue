<script setup>
import NewAccount from "@/components/NewAccount.vue";
import LoginRequired from "@/components/LoginRequired.vue";
</script>

<template>
<div v-if="admin">
    <img class="admin-pic" src="@/components/icons/admin-with-cogwheels.png"/>
    <h2 class="title">CRIAR ADMIN</h2>
    <NewAccount/>

</div>
<LoginRequired v-else :text="text"></LoginRequired>
</template>


<script>
export default {
  name: 'app',
  data () {
    return {
      admin: false,
      text: "Para acessar essa página é necessário ser um administrador",
    }
  }
}
</script>

<style scoped>

.title{
    font-weight: normal;
    text-align: center;
    margin-top: 90px;
    margin-left: 175px;
}

.admin-pic{
    float: right;
    margin-top: 100px;
    margin-right: 50px;
    height: 120px;
}
</style>