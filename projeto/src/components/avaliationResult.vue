<template>
  <div class="evaluation">
    <star-rating v-bind:rating=stars :star-size="30" :read-only="true"></star-rating>
    <p>{{ info }} </p>

  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "AvaliationResult",
  props: ["id"],
  data() {
    return {book:{},stars:0,info:""};
  },
  async mounted(){
    const res_book = await axios.get("http://localhost:3000/api/book/id="+this.id);
    this.book = res_book.data;
  }
};
</script>