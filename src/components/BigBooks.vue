<template>
  <div class="home-book">
    <img class="img-livro" v-bind:src="'/src/assets/' + filename" />
    <div class="home-book-info">
      <p class="title">{{ name }}</p>
      <ul v-for="category in categories" class="category">
        <li>{{ category }}</li>
      </ul>
      <p class="pages">{{ pages }} páginas</p>
      <button type="button" class="btn btn-primary">Ler agora</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "books",
  props: ["name", "categories", "pages", "filename"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.img-livro {
  width: 200px;
}

.home-book:hover {
  border-radius: 0.5em;
  box-shadow: 2px 2px 2px 2px lightgray;
}

.home-book {
  display: flex;
  width: 570px;
  margin: 2vw 0;
  margin-right: 2vw;
}

.home-book-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

.pages {
  font-size: 1.2em;
}

.btn.btn-primary {
  width: 200px;
  background-color: #38b6ff;
  border-color: #38b6ff;
}

.btn.btn-primary:hover {
  width: 200px;
  background-color: #134968;
  border-color: #134968;
}
</style>
