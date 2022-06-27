<template>
  <span>
    Cartão de {{ name }} terminado em {{ code.substring(code.length-4) }}
  </span>
</template>

<script>
export default {
  name: "CreditCard",
  props: ["name", "code"]
}
</script>

<style scoped>

</style>