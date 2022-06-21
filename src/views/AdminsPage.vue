<script setup>
import Footer from "../components/Footer.vue";
import AdminMenu from "../components/AdminMenu.vue";
import LoginRequired from "../components/LoginRequired.vue";
import Menu from "../components/Menu.vue";
</script>

<template>
  <!-- Exibi o site se o usuário logado for administrador -->
  <div v-if="isAdmin()" style="min-height: 699px">
    <AdminMenu :plotDropDown="false" />
    <!-- O modal que mostra todas as compras -->
    <div id="modalBuys" class="modal" style="margin-top: 200px">
      <div class="modal-dialog">
        <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Compras</h4>
            <button class="btn-close" data-bs-dismiss="modal" type="button"></button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <p v-for="buys in getAllBuys()" class="registro-list">{{ buys.name + " - R$" + buys.value }}</p>
          </div>

          <!-- Modal footer -->
          <div class="modal-footer">
            <button class="btn btn-danger" data-bs-dismiss="modal" type="button">Fechar</button>
          </div>

        </div>
      </div>
    </div>
    <!-- Div principal do site -->
    <div class="container-show-datas">
      <!-- Div para mostrar todos os admins -->
      <div style="width:50%; text-align: center;">
        <h1 class="titlePage">Administradores</h1>
        <div class="list">
          <p v-for="admins in getAllAdmins()" class="listAdmins">
            {{ admins }}
          </p>
        </div>
        <button @click="goToAddAdmin()" type="button" class="btn btn-success">Adicionar Administradores</button>
      </div>
      <!-- Div para mostrar o histórico de compras -->
      <div style="width:50%; text-align: center;">
        <h1 class="titlePage">Histórico de compras</h1>
        <div class="list">
          <p v-for="buys in getFirstBuys()" class="registro-list">
            {{ buys.name + " - R$" + buys.value }}
          </p>
        </div>
        <button type="button" class="btn btn-primary" data-bs-target="#modalBuys" data-bs-toggle="modal">Visualizar
          todas as compras
        </button>
      </div>
    </div>

  </div>
  <!-- Se o usuário não está logado em uma conta de administrador ele vem pra cá -->
  <div style="min-height: 699px" v-else>
    <Menu :plotDropDown="false" />
    <LoginRequired :text="blockAdmin" />
  </div>
  <Footer/>
</template>

<script>
import {VueCookieNext} from "vue-cookie-next";

export default {
  name: "app",
  data() {
    return {
      blockAdmin: "Para acessar essa página é necessário ser um administrador"
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
     * Redireciona a pagina para a pagina novoadmin
     */
    goToAddAdmin() {
      this.$router.push("/novoadmin");
    },
    /**
     * Retorna uma lista de objetos com todos os admins
     */
    getAllAdmins() {
      let admins = [];
      let accounts = JSON.parse(localStorage.getItem("accounts"));
      for (const account of accounts) {
        console.log(account);
        if (account.admin) {
          admins.push(account.name);
        }
      }
      return admins;
    },
    /**
     * Retorna somente as 10 primeiras compras
     */
    getFirstBuys() {
      let buys = this.getAllBuys();
      if (buys.length >= 10) {
        return buys.slice(0, 10);
      }
      return buys;
    },
    /**
     * Retorna todas as compras
     */
    getAllBuys() {
      return JSON.parse(localStorage.getItem("buys")).reverse();
    }
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

.container-show-datas {
  display: flex;
  margin-bottom: 3em;
}

.list {
  padding: 1em;
  font-size: 1.5em;
  text-align: center;
}

.listAdmins:nth-child(2n) {
  background-color: #8fd5fd;
}

.registro-list:nth-child(2n) {
  background-color: #8fd5fd;
}

</style>
