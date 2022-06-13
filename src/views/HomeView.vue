<script setup>
import Books from '@/components/Books.vue'
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";

</script>

<template>
  <Menu/>

    <div  class="books">
      <Books v-for="analito in checkedHemograma"/>
    </div>
  <Footer>

  </Footer>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      checkedHemograma: ['Harry Potter e a pedra', 'Crepusculo'],
    }
  }
}
</script>

<style>
@import '@/assets/base.css';

.books{
  margin-top: 120px;
  padding: 0em 2vw;
  display: flex;
  flex-wrap: wrap;
}

.promo{
  background-color: #1B8C1F;
  color: white;
  text-align: center;
  border-radius: 5px;
  padding: 2px 0;
}

</style>
