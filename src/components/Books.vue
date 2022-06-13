<template>
  <div class="home-book">
    <img class="img-livro" src="./img/harry.jpg" width="200vw" />
    <div class="home-book-info">
      <p class="title">{{name}}</p>
      <ul class="category">
        <li>{{categorias}}</li>
        <li>Juvenil</li>
      </ul>
      <p class="price">R$ {{price}}</p>
      <div class="promo">Promoção!!</div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'books',
  props: ['name','price','categorias'],
  data () {
    return {
      
    }
  }
}
</script>


<style scoped>




.home-book:hover{
  border-radius: 0.5em;
  box-shadow: 2px 2px 2px 2px lightgray;
  cursor: pointer;
}

.home-book{
    display: flex;
    max-width: 29vw !important;
    min-width: 28vw;
    margin: 2vw 0;
    margin-right: 2vw ;
}

.home-book-info{
  padding-left: 2em  ;
  font-family: 'Grape Nuts', cursive;
  font-family: 'Open Sans', sans-serif;
}

.category{
    color: #0B859F;
}

.title{
    font-size: 1.5em;
}

.price{
  font-size: 1.5em;
}
</style>
