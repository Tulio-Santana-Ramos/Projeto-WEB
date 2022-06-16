

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
    <button class="edit-info" v-if="admin">
      <img class="edit-fig" src="@/components/icons/settings.png"/>Editar informações
    </button>
    <div class="buttons" v-else>
      <button type="button" class="btn btn-primary bag-book" @click="addToBag(id)">Adicionar ao carrinho</button>
      <button type="button" class="btn btn-primary buy-book"  @click="addToBag(id);goToCarrinho()">Comprar E-book</button>
    </div>
  </div>
  <div class="book-specifics">
    <div class="info">
      <p>Editora:</p>
      <p style="text-align: right">{{ editor }}</p>
    </div>
    <div class="info">
      <p>Autor(a):</p>
      <p style="text-align: right">{{ author }}</p>
    </div>
    <div class="info">
      <p>Tradutor(a):</p>
      <p style="text-align: right">{{tradutor}}</p>
    </div>
    <div class="info">
      <p>Ano:</p>
      <p style="text-align: right">{{year}}</p>
    </div>
  </div>

  <h2 class="title-evaluation">Avaliações</h2>
  

</template>

<!-- TODO: Fazer o botão adicionar ao carrinho adicionar o item ao carrinho e aparecer uma notificação item foi adicionado ao carrinho olha toasts bootstrap -->
<script>
export default {
  name: "BookInfo",

  props: ["Isinpromo", "filename", "name", "categories", "price", "synopsis","quantidade","editor","author","tradutor","year","addToBag","id"],
  data() {
    return {
      admin: false,
    };
  },
  methods: {
    goToCarrinho(){
      this.$router.push("/carrinho");
     }
  }
};
</script>

<style scoped>
.book-container {
  margin-top: 150px;
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

.edit-info {
  font-size: x-large;
  text-align: center;
  margin: 2em;
  width: 50%;
  height: 50px;
  color: #fff;
  border-radius: 10px;
  border-color: #38b6ff;
  background-color: #38b6ff;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.edit-info:hover {
  background-color: #1872a7;
  border-color: #1872a7;
}

.edit-fig {
  width: 40px;
  height: 40px;
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
  font-size: x-large;
  text-align: center;
  margin: auto;
  margin-top: 80px;
  border-color: #38b6ff;
  width: 300px;
}

.bag-book:hover {
  background-color: #1872a7;
  border-color: #1872a7;
}

.buy-book {
  background-color: #0b6112;
  color: #fff;
  font-size: x-large;
  text-align: center;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  border-color: #0b6112;
  width: 55%;
}

.buy-book:hover {
  background-color: rgb(8, 65, 13);
  border-color: rgb(8, 65, 13);
}

.book-specifics {
  font-size: 1.25em;
  margin-top: 15px;
}


.info{
  background-color: #38b6ff;
  color: #fff;
  padding-right: 60px;
  padding-left: 60px;
  height: 40px;
  display: flex;
  justify-content: space-between;
}

.info:nth-child(odd){
  background-color: white;
  color: black;
}




.title-evaluation{
  text-align: center;
  margin: 2em 0 ;
  color:#257eb3;
}

</style>
