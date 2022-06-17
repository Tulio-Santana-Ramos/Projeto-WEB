<script setup>
import Footer from "@/components/Footer.vue";
import AdminMenu from "@/components/AdminMenu.vue";
import Menu from "@/components/Menu.vue";
import LoginRequired from "@/components/LoginRequired.vue";
import AddBook from "@/components/AddBook.vue";
</script>

<template>
  <div v-if="admin">
    <AdminMenu
        :plotDropDown="false"
    />
    <div class="toast-container position-fixed bottom-0 end-0 p-3 " style="z-index: 1000; ">
      <div class="toast " id="liveToast" ref="toast">
        <div class="toast-header">
          <strong class="me-auto">Livro adicionado</strong>
          <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
        </div>
        <div class="toast-body">
          <p>O livro foi adicionado</p>
        </div>
      </div>
    </div>
    <h1 class="titlePage">Adicionar/Editar Livro</h1>
    <AddBook
    :propagateChanges="showToast"
    ></AddBook>
    <div class="manage-item"></div>
  </div>
  <div v-else>
    <Menu
        :plotDropDown="false"
    />
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
  methods:{
    showToast(){
      this.$refs.toast.classList.add("show");
      console.log("show");
      setTimeout(()=>{
        console.log("hide");
        this.$refs.toast.classList.remove("show");
      },5000);
    },
  }
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
