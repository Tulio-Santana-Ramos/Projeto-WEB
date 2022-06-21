<template>
  <div class="home-book">
    <img class="img-livro" v-bind:src="'/src/assets/' + id + '.jpg'" />
    <div class="home-book-info">
      <p class="title">{{ name }}</p>
      <ul v-for="category in categories" class="category">
        <li>{{ category }}</li>
      </ul>
      <p class="price" v-if="!promo()">R$ {{ price }}</p>
      <p class="price" v-else>R$ {{ promotion.tempPrice }}</p>

      <div v-if="promo()" class="promo">Promoção!!</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "books",
  props: ["name", "price", "categories", "promotion", "id"],
  data() {
    return {};
  },
  methods: {
    promo() {
      return this.promotion.is;
    },
  },
};
</script>

<style scoped>
.img-livro {
  width: 152px;
}

.home-book:hover {
  border-radius: 0.5em;
  box-shadow: 2px 2px 2px 2px lightgray;
  cursor: pointer;
}

.home-book {
  display: flex;
  width: 21vw;
  margin: 2vw 0;
  margin-right: 2vw;
  min-height: 236px;
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
  font-size: 1em;
}

.price {
  font-size: 1em;
}

.promo {
  background-color: #1b8c1f;
  color: white;
  text-align: center;
  border-radius: 5px;
  padding: 2px 0;
}
</style>
