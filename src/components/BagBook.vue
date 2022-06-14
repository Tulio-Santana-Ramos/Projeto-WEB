<template>
  <div class="home-book">
    <img class="img-livro" v-bind:src="'/src/assets/' + filename" />
    <div class="home-book-info">
      <p class="title">{{ name }}</p>
      <ul v-for="category in categories" class="category">
        <li>{{ category }}</li>
      </ul>
      <p class="price">R$ {{ price }}</p>
    </div>
    <div class="remove-button">
      <button type="button" class="btn btn-danger">Remover item</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "books",
  props: ["name", "price", "categories", "filename"],
  data() {
    return {};
  },
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
