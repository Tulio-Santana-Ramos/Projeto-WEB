<template>
  <span>
    Cartão do {{ flag }} terminado em {{ code }} - {{ name }}
  </span>
</template>

<script>
export default {
  name: "CreditCard",
  props: ["name", "code", "flag"]
}
</script>

<style scoped>

</style>