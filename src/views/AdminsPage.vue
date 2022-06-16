<script setup>
import Footer from "@/components/Footer.vue";
import AdminMenu from "@/components/AdminMenu.vue";
import LoginRequired from "@/components/LoginRequired.vue";
import Menu from "@/components/Menu.vue";
</script>

<template>
  <div v-if="admin">
    <AdminMenu
        :plotDropDown="false"
    />
    <div class="dados">
      <div style="width:50%; text-align: center;">
        <h1 class="titlePage">Administradores</h1>
        <div  class="list">
          <p v-for="admins in adminsList" class="listAdmins">{{admins}}</p> 
        </div>
        <button @click="goToAddAdmin()" type="button" class="btn btn-success">Adicionar Administradores</button>
      </div>
      <div style="width:50%; text-align: center;">
        <h1 class="titlePage">Histórico de compras</h1>
        <div  class="list">
          <p v-for="admins in RegisterList" class="registro-list">{{admins}}</p> 
        </div>
        <button type="button" class="btn btn-primary">Visualizar todas as compras</button>
      </div>
    </div>
  </div>
  <div v-else>
    <Menu
        :plotDropDown="false"
    />
    <LoginRequired :text="text"></LoginRequired>
  </div>
  <Footer></Footer>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      text: "Para acessar essa página é necessário ser um administrador",
      admin: true,
      adminsList: ["Ana Clara","Túlio","Eduardo"],
      RegisterList: ["João Silva - R$ 30,90","Maria Soares -  R$ 40,90"]        
    };
  },
   methods: {
     goToAddAdmin(){
      this.$router.push("/novoadmin");
     },
    
   
  },
};
</script>

<style scoped>
@import "@/assets/base.css";

.titlePage {
  color: #38b6ff;
  margin-top: 150px;
  text-align: center;
}

.dados {
  display: flex;
  justify-content: column;
  margin-bottom: 3em;
}

.admin-list{
  margin: 2em 0;
  text-align: center;
}

.list{
  padding: 1em;
  font-size: 1.5em;
  text-align: center;
}

.listAdmins:nth-child(2n){
  background-color: #8fd5fd;
}

.registro-list:nth-child(2n){
  background-color: #8fd5fd;
}


</style>
