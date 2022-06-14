<script setup>
import Footer from "@/components/Footer.vue";
import AdminMenu from "@/components/AdminMenu.vue";
</script>

<template>
    <AdminMenu></AdminMenu>
    <h1 class="titlePage">Adicionar/Editar Livro</h1>
    <div v-if="admin" class="manage-item">

    </div>
    <div class="NoLogin" v-else>
        <h1>Para acessar essa página é necessário ser um administrador</h1>
        <div>
        <button @click="goToLogin()" type="button" class="btn btn-primary">
            <a style="height: 100%"
            ><img
                class="img-navbar"
                src="@/components/icons/admin-with-cogwheels.png"
                style="width: 50px; height: 50px; padding: 10px; filter: brightness(0) invert(1);" /></a
            >Login
        </button>
        </div>
    </div>
    <Footer></Footer>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      admin: false,
    };
  },
  methods: {
    goToLogin() {
        this.$router.push("/login");
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