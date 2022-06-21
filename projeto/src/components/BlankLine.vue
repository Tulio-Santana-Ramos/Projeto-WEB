<template>
  <div class="division-bar">
  </div>
</template>

<script>
export default {
  name: "BlankLine",
  props: ["position"]
}
</script>

<style scoped>
.division-bar {
  --division-bar-width: 95vw;
  height: 0;
  width: var(--division-bar-width);
  border: 1px solid #38B6FF;
  margin: 0px calc((100vw - var(--division-bar-width)) / 2) 0px calc((100vw - var(--division-bar-width)) / 2);


}
</style>