

<template>
  <div class="book-container">
    <div v-if="Isinpromo" class="promo">
      Quantidade promocional restante: {{ quantidade }}
    </div>
    <div class="book-basics">
      <img class="img-livro" v-bind:src="'/src/assets/' + filename" />
      <div class="home-book-info">
        <p class="title">{{ name }}</p>
        <ul v-for="category in categories" class="category">
          <li>{{ category }}</li>
        </ul>
        <p class="price">R$ {{ price }}</p>
      </div>
    </div>
    <div class="synopsis">{{ synopsis }}</div>
    <div class="buttons">
      <button class="bag-book">Adicionar ao carrrinho</button>
      <button class="buy-book">Comprar E-book</button>
    </div>
  </div>
  <div class="book-specifics">
    <div class="info-blue">
      <p>Editora:</p>
      <p style="text-align: right">{{ editor }}</p>
    </div>
    <div class="info-white">
      <p>Autor(a):</p>
      <p style="text-align: right">{{ author }}</p>
    </div>
    <div class="info-blue">
      <p>Tradutor(a):</p>
      <p style="text-align: right">{{tradutor}}</p>
    </div>
    <div class="info-white">
      <p>Ano:</p>
      <p style="text-align: right">{{year}}</p>
    </div>
  </div>

    <h2 class="title-evaluation">Avaliações</h2>
  

</template>

<script>
export default {
  name: "BookInfo",

  props: ["Isinpromo", "filename", "name", "categories", "price", "synopsis","quantidade","editor","author","tradutor","year"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.book-container {
  margin-top: 100px;
  padding-left: 100px;
}

.promo {
  color: white;
  font-size: 1.5em;
  text-align: center;
  margin-top: 150px;
  margin-left: 50px;
  width: 22vw;
  background-color: #1b8c1f;
  border-radius: 10px;
}

.book-basics {
  margin-top: 20px;
  margin-left: 20px;
  width: 80vw;
  font-family: "Grape Nuts", cursive;
  font-family: "Open Sans", sans-serif;
}
.img-livro {
  width: 252px;
  margin-left: 30px;
  float: left;
  padding: 10px;
}
.home-book-info {
  padding-left: 2em;
}
.title {
  font-size: 1.5em;
  padding-left: 150px;
  margin-left: 170px;
}
.category {
  color: #0b859f;
  padding-left: 150px;
  font-size: large;
  margin-left: 200px;
}
.price {
  font-size: 1.5em;
  text-align: right;
  padding-right: 20px;
}
.synopsis {
  font-size: large;
  max-width: 1076px;
  margin-left: 200px;
  padding-top: 5px;
  padding-left: 150px;
  padding-bottom: 5px;
  word-wrap: break-word;
}

.buttons {
    display: flex;
    justify-content: center;
    flex-direction: column ;
    align-content: center;
}

.bag-book {
  background-color: #38b6ff;
  color: #fff;
  font-family: "Grape Nuts", cursive;
  font-family: "Open Sans", sans-serif;
  font-size: x-large;
  text-align: center;
  margin: auto;
  margin-top: 80px;
  border-radius: 10px;
  border-color: #38b6ff;
  padding: 10px 3px 10px px;
  width: 300px;
  height: 45px;
}

.bag-book:hover {
  background-color: #1872a7;
  border-color: #1872a7;
}

.buy-book {
  background-color: #0b6112;
  color: #fff;
  font-family: "Grape Nuts", cursive;
  font-family: "Open Sans", sans-serif;
  font-size: x-large;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 375px;
  border-radius: 10px;
  border-color: #0b6112;;
  padding: 10px 3px 10px px;
  width: 55%;
  height: 45px;
}

.buy-book:hover {
  background-color: rgb(8, 65, 13);
  border-color: rgb(8, 65, 13);
}

.book-specifics {
  font-size: 1.25em;
}

.info-blue {
  background-color: #38b6ff;
  color: #fff;
  padding-right: 10px;
  height: 80px;
}

.info-white {
  background-color: #fff;
  color: black;
  padding-right: 10px;
  height: 80px;
}


.title-evaluation{
    text-align: center;
    margin: 2em 0 ;
    color:#257eb3;
}

</style>
