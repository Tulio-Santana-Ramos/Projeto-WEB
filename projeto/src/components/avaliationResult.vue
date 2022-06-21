<template>
  <div class="evaluation">
    <star-rating v-bind:rating=stars :star-size="30" :read-only="true"></star-rating>
    <p>{{ info }} </p>

  </div>
</template>


<script>
export default {
  name: "AvaliationResult",
  props: ["info", "stars"],
  data() {
    return {};
  },
};
</script>