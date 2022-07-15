<template>
  <div v-for="(item, i) in itens" :key="item._id">
    <p>
      <span>{{i+1}}</span>
      {{item.synopsis}}
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Test",
  data() {
    return {
      itens: []
    }
  },
  async mounted(){
    const response = await axios.get("http://localhost:3000/api/book/");
    this.itens = response.data;

  }
}
</script>

<style scoped>

</style>