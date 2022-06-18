<template>
  <span>{{ name }}</span>
  <br>
  <span style="padding-left: 50px">
    <input type="radio" v-bind:name="input_name" v-bind:value="index + ' 0'"/>
    Expira em {{ life_time }}
  </span>
</template>

<script>
export default {
  name: "DefaultPaymentOption",
  props: ["name", "life_time", "input_name", "index"],
}
</script>

<style scoped>

</style>