<script setup>
import Footer from "@/components/Footer.vue";
import AdminMenu from "@/components/AdminMenu.vue";
import Menu from "@/components/Menu.vue";
import LoginRequired from "@/components/LoginRequired.vue";
import AddBook from "@/components/AddBook.vue";
</script>

<template>
  <div v-if="admin">
    <AdminMenu></AdminMenu>
    <h1 class="titlePage">Adicionar/Editar Livro</h1>
    <AddBook></AddBook>
    <div class="manage-item"></div>
  </div>
  <div v-else>
    <Menu></Menu>
    <LoginRequired  :text="text"></LoginRequired>
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
    };
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

.NoLogin {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #38b6ff;
  height: 51.7vh;
}

.btn.btn-primary {
  margin-top: 50px;
  width: 200px;
  background-color: #38b6ff;
  border-color: #38b6ff;
}

.btn.btn-primary:hover {
  width: 200px;
  background-color: #134968;
  border-color: #134968;
}
</style>
