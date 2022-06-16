<template>

</template>

<script>
import {VueCookieNext} from "vue-cookie-next";

export default {
  name: "ResetConfig",
  mounted() {
    VueCookieNext.setCookie("bag",'[{"name": "Harry Potter e a pedra filosofal","id":0,"categories": ["Aventura", "Juvenil"],"price": "30.90","promo": true,"img": "harry.jpg"},{"name": "Harry Potter e a pedra filosofal","id":1,"categories": ["Aventura", "Juvenil"],"price": "30.90","promo": true,"img": "harry.jpg"},{"name": "Harry Potter e a pedra filosofal","id":2,"categories": ["Aventura", "Juvenil"],"price": "30.90","promo": true,"img": "harry.jpg"}]');
    VueCookieNext.setCookie("payment_forms",'[{"name": "Boleto", "life_time": "1 dia"},{"name": "Pix", "life_time": "30 minutos"}]');
    VueCookieNext.setCookie("cards",'[{"name":"Harry Potter","code":1010,"flag":"Nubank"},{"name":"Hermione","code":2020,"flag":"Banco do Brasil"}]');
  }
}
</script>

<style scoped>

</style>