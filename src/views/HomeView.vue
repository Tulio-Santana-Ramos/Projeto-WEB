<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import Books from '@/components/Books.vue'
</script>

<template>

    <div class="books">
        <div v-for="book in books">
          <Books  :name="book.name" :price="book.price" :categoria = "book.categorias"/>
        </div>
    </div>
  
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      books: [
        {name:'Harry Potter e a pedra filosofal',categorias:["Aventura","Juvenil"],price: "30.90"}, 
        {name:'Crepusculo',categorias:["Aventura","Juvenil"],price: "30.90"}
        ],   
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
