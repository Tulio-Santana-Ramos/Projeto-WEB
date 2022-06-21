<template>
  <div class="NoLogin">
    <h1>{{ text }}</h1>
    <div>
      <button @click="goToLogin()" type="button" class="btn btn-primary">
        <a style="height: 100%"
        ><img
            class="img-navbar"
            src="@/components/icons/user_white.png"
            style="width: 50px; height: 50px; padding: 10px"/></a
        >Login
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginRequired",
  props: ["text"],
  data() {
    return {};
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

.books {
  padding: 0em 2vw;
  display: flex;
  flex-wrap: wrap;
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
