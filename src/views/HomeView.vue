<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import Books from '@/components/Books.vue'
</script>

<template>


    <div  class="books">
      <Books v-for="analito in checkedHemograma"/>
    </div>
  
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    
      checkedHemograma: ['Harry', 'Crepusculo'],
      
      
     
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
