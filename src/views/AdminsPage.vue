<script setup>
import Footer from "@/components/Footer.vue";
import AdminMenu from "@/components/AdminMenu.vue";
import LoginRequired from "@/components/LoginRequired.vue";
import Menu from "@/components/Menu.vue";
</script>

<template>
  <div v-if="admin" style="min-height: calc(100vh - 410px)">
    <AdminMenu
        :plotDropDown="false"
    />
    <!-- The Modal -->
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
    <div class="dados">
      <div style="width:50%; text-align: center;">
        <h1 class="titlePage">Administradores</h1>
        <div class="list">
          <p v-for="admins in getAllAdmins()" class="listAdmins">{{ admins }}</p>
        </div>
        <button @click="goToAddAdmin()" type="button" class="btn btn-success">Adicionar Administradores</button>
      </div>
      <div style="width:50%; text-align: center;">
        <h1 class="titlePage">Histórico de compras</h1>
        <div class="list">
          <p v-for="buys in getFirstBuys()" class="registro-list">{{ buys.name + " - R$" + buys.value }}</p>
        </div>
        <button type="button" class="btn btn-primary" data-bs-target="#modalBuys" data-bs-toggle="modal">Visualizar
          todas as compras
        </button>
      </div>
    </div>

  </div>
  <div style="min-height: calc(100vh - 410px)" v-else>
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
      adminsList: ["Ana Clara", "Túlio", "Eduardo"],
      RegisterList: ["João Silva - R$ 30,90", "Maria Soares -  R$ 40,90"]
    };
  },
  methods: {
    goToAddAdmin() {
      this.$router.push("/novoadmin");
    },
    getAllAdmins() {
      let admins = [];
      let accs = JSON.parse(localStorage.getItem("accounts"));
      for (const acc of accs) {
        console.log(acc);
        if (acc.admin) {
          admins.push(acc.name);
        }
      }
      return admins;
    },
    getFirstBuys() {
      let buys = this.getAllBuys();
      if (buys.length >= 10) {
        return buys.slice(0, 10);
      }
      return buys;
    },
    getAllBuys() {
      return JSON.parse(localStorage.getItem("buys")).reverse();
    }

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

.admin-list {
  margin: 2em 0;
  text-align: center;
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
