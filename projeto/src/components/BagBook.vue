<!-- Mostra os livros suas categorias, capa, preço e se está em promoção-->
<template>
  <div class="home-book">
    <img class="img-livro" v-bind:src="'/src/assets/' + id + '.jpg'"/>
    <div class="home-book-info">
      <!-- Recebe por props o nome do livro -->
      <p class="title">{{ name }}</p> 
      <!-- Lista todas as categorias do livro -->
      <ul v-for="category in categories" class="category">
        <li>{{ category }}</li>
      </ul>
      <!-- Verifica se o livro está em promoção ou não e exibe o preço do livro-->
      <p class="price" v-if="!promo()">R$ {{ price }}</p>
      <p class="price" v-else>R$ {{ promotion.tempPrice }}</p>
    </div>
    <div class="remove-button">
      <!-- Permite remover o livro, a função que faz isso é passada por props-->
      <button type="button" class="btn btn-danger" @click="action(id)">Remover item</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "books",
  props: ["name", "price", "categories", "filename", "promotion", "action", "id"],
  data() {
    return {};
  },
  methods: {
    promo() {
      return this.promotion.is;
    }
  }
};
</script>

<style scoped>
.img-livro {
  width: 150px;
  padding: 0.5em;
}

.home-book {
  display: flex;
  justify-content: space-around;
  width: 1100px;
  margin: 10px 0;
  margin-right: 2vw;
  border-radius: 0.5em;
  box-shadow: 2px 2px 2px 2px lightgray;
}

.home-book-info {
  padding-left: 2em;
  font-family: "Grape Nuts", cursive;
  font-family: "Open Sans", sans-serif;
}

.category {
  color: #0b859f;
}

.title {
  font-size: 1.5em;
}

.price {
  font-size: 1.5em;
}

.btn.btn-danger {
  height: 50px;
}

.remove-button {
  display: flex;

  align-self: flex-end;
  padding: 2em 0;
}
</style>
