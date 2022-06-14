<template>
    <div class="book-container">
        <div v-if="Isinpromo" class="promo">Quantidade promocional restante: 10</div>
        <div class="book-basics">
            <img class="img-livro" v-bind:src="'/src/assets/' + filename"/>
            <div class="home-book-info">
                <p class="title">{{ name }} </p>
                <ul v-for="category in categories" class="category">
                    <li>{{ category }}</li>
                </ul>
                <p class="price">R$ {{ price }}</p>
            </div>
        </div>
        <div class="synopsis">{{ synopsis }}</div>
        <button class="buy-book">Comprar E-book</button>
    </div>
    <div class="book-specifics">
        <div class="info-blue"><p>Editora:</p><p style="text-align: right;">Pottermore Publishing</p></div>
        <div class="info-white"><p>Autor(a):</p><p style="text-align: right;">MOSS | J.K. ROWLING</p></div>
        <div class="info-blue"><p>Tradutor(a):</p><p style="text-align: right;">LIA WYLER</p></div>
        <div class="info-white"><p>Ano:</p><p style="text-align: right;">2015</p></div>
    </div>

    <div class="book-stats">
        <div class="evaluation">
            <star-rating :rating="5" :star-size="30" :read-only="true"></star-rating><p> Excelente, melhor livro que já li!!</p>
        </div>
        <div class="evaluation">
            <star-rating :rating="1" :star-size="30" :read-only="true"></star-rating><p> Muito mal escrito!</p>
        </div>
        <div class="evaluation">
            <star-rating :rating="3" :star-size="30" :read-only="true"></star-rating><p> Bom pra passar o tempo, mas nada impressionante</p>
        </div>
    </div>
</template>

<script>
export default {
  name: "BookInfo",
  props: ["Isinpromo", "filename", "name", "categories", "price", "synopsis"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.book-container{
    margin-top: 100px;
    margin-left: 100px;
}
.promo{
    color: white;
    font-size: 1.5em;
    text-align: center;
    margin-top: 150px;
    margin-left: 50px;
    width: 22vw;
    background-color: #1B8C1F;;
    border-radius: 10px;
}

.book-basics{
    margin-top: 20px;
    margin-left: 20px;
    width: 80vw;
    font-family: 'Grape Nuts', cursive;
    font-family: 'Open Sans', sans-serif;
}
.img-livro{
    width: 252px;
    margin-left: 30px;
    float: left;
    padding: 10px;
}
.home-book-info{
    padding-left: 2em;
}
.title{
    font-size: 1.5em;
    padding-left:150px;
    margin-left: 170px;
}
.category{
    color: #0B859F;
    padding-left: 150px;
    font-size: large;
    margin-left: 200px;
}
.price{
    font-size: 1.5em;
    text-align: right;
    padding-right: 20px;
}
.synopsis{
    font-size: large;
    max-width: 1076px;
    margin-left: 200px;
    padding-top:5px;
    padding-left:150px;
    padding-bottom:5px;
    word-wrap: break-word;
}

.buy-book{
    background-color: #38B6FF;
    color: #fff;
    font-family: 'Grape Nuts', cursive;
    font-family: 'Open Sans', sans-serif;
    font-size: x-large;
    text-align: center;
    margin-top: 80px;
    margin-bottom: 20px;
    margin-left: 375px;
    border-radius: 10px;
    border-color: #38B6FF;
    padding: 10px 3px 10px px;
    width: 55%;
    height: 45px;
}

.book-specifics{
    font-size: 1.25em;
}

.info-blue{
    background-color: #38B6FF;
    color: #fff;
    padding-right: 10px;
    height: 80px;
}

.info-white{
    background-color: #fff;
    color: black;
    padding-right: 10px;
    height: 80px;
}

.book-stats{
    color: black;
    font-size: 1.25em;
    margin-top: 5px;
    height: 255px;
    border-style: solid;
    border-color: #38B6FF #fff  #fff #fff;
}

.evaluation{
    padding-left: 10px;
    border-style: solid;
    border-color:  #fff  #fff #38B6FF #fff ;
}

.buy-book:hover{
    background-color: #1872a7;
}

</style>