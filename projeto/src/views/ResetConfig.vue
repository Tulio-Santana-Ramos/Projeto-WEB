<template>

</template>

<script>
import {VueCookieNext} from "vue-cookie-next";

export default {
  name: "ResetConfig",
  /**
   * Reseta todas as informações do banco
   */
  mounted() {
    VueCookieNext.setCookie("bag", '[]');
    localStorage.setItem("libraries", '');
    //localStorage.setItem("libraries", '[{"user":1,"lib":[{"id":0,"eval":false},{"id":2,"eval":false}]}]');
  }
}
</script>

<style scoped>

</style>