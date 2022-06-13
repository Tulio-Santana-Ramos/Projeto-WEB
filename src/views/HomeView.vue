<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import Books from '@/components/Books.vue'
import Footer from "../components/Footer.vue";

</script>

<template>


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
      checkedHemograma: ['Harry Potter e a pedra filosofal', 'Crepusculo'],   
    }
  }
}
</script>

<style>
@import '@/assets/base.css';

.books{
 width: 93vw;
    
    padding: 0em 2vw;
    display: flex;
    justify-content: row;
    flex-wrap: wrap;
}


</style>
