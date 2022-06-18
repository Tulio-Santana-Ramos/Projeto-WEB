

<template>

  <div class="book-container">
    <!-- The Modal -->
    <div id="modalChangeInfos" class="modal" style="margin-top: 200px;overflow: auto">
      <div class="modal-dialog">
        <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Alterar informações do livro</h4>
            <button class="btn-close" data-bs-dismiss="modal" type="button"></button>
          </div>
          <div style="overflow-y: scroll; height: 600px; padding-left: 10px; padding-right: 10px">
            <div class="input-group input-container">
            <span class="input-group-text" style="width: 87px;">
              Nome
            </span>
              <input class="form-control" placeholder="Nome do livro"
                     style="width: 350px;height: 45px;font-size: medium"
                     ref="input_nome" v-bind:value="name">
            </div>
            <br>
            <div class="input-group input-container" style="margin-right: auto; margin-left: auto;">
            <span class="input-group-text" style="width: 87px">
              Preço
            </span>
              <input class="form-control" placeholder="Preço do livro" style="height: 45px;font-size: medium"
                     type="text" ref="input_preco" v-bind:value="price">
            </div>
            <br>
            <div class="input-group input-container" style="margin-right: auto; margin-left: auto;">
            <span class="input-group-text" style="width: 87px">
              Sinopse
            </span>
              <textarea class="form-control" placeholder="Sinopse do livro" style="resize: none;height: 100px;font-size: medium"
                        type="text" ref="input_sinopse" v-bind:value="synopsis"/>
            </div>
            <br>
            <div class="input-group input-container" style="margin-right: auto; margin-left: auto;">
            <span class="input-group-text" style="width: 87px">
              Editora
            </span>
              <input class="form-control" placeholder="Nome da editora" style="height: 45px;font-size: medium"
                     type="text" ref="input_editora" v-bind:value="editor">
            </div>
            <br>
            <div class="input-group input-container" style="margin-right: auto; margin-left: auto;">
            <span class="input-group-text" style="width: 87px">
              Autor
            </span>
              <input class="form-control" placeholder="Nome do autor" style="height: 45px;font-size: medium"
                     type="text" ref="input_autor" v-bind:value="author">
            </div>
            <br>
            <div class="input-group input-container" style="margin-right: auto; margin-left: auto;">
            <span class="input-group-text" style="width: 87px">
              Tradutor
            </span>
              <input class="form-control" placeholder="Nome do tradutor" style="height: 45px;font-size: medium"
                     type="text" ref="input_tradutor" v-bind:value="tradutor">
            </div>
            <br>
            <div class="input-group input-container" style="margin-right: auto; margin-left: auto;">
            <span class="input-group-text" style="width: 87px">
              Ano
            </span>
              <input class="form-control" placeholder="Ano de publicação" style="height: 45px;font-size: medium"
                     type="text" ref="input_ano" v-bind:value="year">
            </div>
            <div v-for="(category,index) in getAllCategories()" :key="updateCategories">
              <input v-model="categoriesCheck[index]" type="checkbox">
              <label>{{
                  category.name
                }}</label>

            </div>
            <div>
              Adicionar nova categoria
              <input class="form-control" placeholder="Nova categoria" style="height: 45px;font-size: medium"
                     type="text" ref="newCategory" >
              <button class="btn btn-primary" type="button" @click="addCategory(this.$refs.newCategory.value)">Adicionar categoria</button>
            </div>
          </div>
          <!-- Modal footer -->
          <div class="modal-footer">
            <button class="btn btn-primary" data-bs-dismiss="modal" @click="updateLivro(this.$refs.input_nome,this.$refs.input_preco,this.$refs.input_sinopse,this.$refs.input_editora,this.$refs.input_autor,this.$refs.input_tradutor,this.$refs.input_ano)" type="button">Alterar</button>
            <button class="btn btn-danger" data-bs-dismiss="modal" type="button">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="promotion.is" class="promo">
      Quantidade promocional restante: {{ promotion.numberBooks }}
    </div>
    <div class="book-basics">
      <img class="img-livro" v-bind:src="'/src/assets/' + id + '.jpg'" />
      <div class="home-book-info">
        <p class="title">{{ name }}</p>
        <ul v-for="category in categories" class="category">
          <li>{{ category }}</li>
        </ul>
        <p class="price" v-if="!promotion.is">R$ {{ price }}</p>
        <p class="price" v-else>R$ {{ promotion.tempPrice }}</p>
      </div>
    </div>
    <div class="synopsis">{{ synopsis }}</div>
    <button class="edit-info" v-if="isAdmin()" data-bs-target="#modalChangeInfos" data-bs-toggle="modal">
      <img class="edit-fig"  src="@/components/icons/settings.png"/>Editar informações
    </button>
    <!-- TODO: verificar se ta na lib -->
    <div class="buttons" v-else-if="!inBag">
      <button type="button" class="btn btn-primary bag-book" ref="btn_carrinho" @click="showToast();atClick(id);hideBtns()">Adicionar ao carrinho</button>
      <button type="button" class="btn btn-primary buy-book" ref="btn_compra" @click="atClick(id);goToCarrinho()">Comprar E-book</button>
    </div>
    <div v-else>

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
  <div class="toast-container position-fixed top-0 end-0 p-3 " style="z-index: 1000; ">
    <div class="toast" id="liveToast" ref="toast">
      <div class="toast-header">
        <strong class="me-auto">Livro adicionado</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
      </div>
      <div class="toast-body">
        <p>O livro foi adicionado</p>
      </div>
    </div>
  </div>
</template>
<script>
import {VueCookieNext} from "vue-cookie-next";

export default {
  name: "BookInfo",
  props: ["name", "categories", "price", "synopsis","promotion","editor","author","tradutor","year","atClick","id","inBag","inLib"],
  data() {
    return {
      categoriesCheck:[],
      updateCategories:0
    };
  },
  mounted() {
    let categories = this.getAllCategories();
    for (let i = 0; i < categories.length; i++){
      this.categoriesCheck[i] = this.searchInActualCategories(categories[i].name);
    }
  },
  methods: {
    addCategory(newCategory){
      let categories = this.getAllCategories();
      let newCategoryObj = {};
      newCategoryObj.name = newCategory;
      newCategoryObj.id = categories[categories.length-1].id+1;
      categories.push(newCategoryObj);
      localStorage.setItem("categories",JSON.stringify(categories));
      this.updateCategories++;
    },
    getAllCategories() {
      return JSON.parse(localStorage.getItem("categories"))
    },
    searchInActualCategories(id){
      for (const category of this.categories) {
        if (category === id) {
          return true;
        }
      }
      return false;
    },
    showToast(){
      this.$refs.toast.classList.add("show");
      console.log("show");
      setTimeout(()=>{
        console.log("hide");
        this.$refs.toast.classList.remove("show");
      },5000);
    },
    hideBtns(){
      this.$refs.btn_compra.remove();
      this.$refs.btn_carrinho.remove();
    },
    logicalCategoriesToNumerical(){
      let categories = [];
      for (let i = 0; i < this.categoriesCheck.length; i++){
        if(this.categoriesCheck[i]){
          categories.push(i);
        }
      }
      return categories;
    },
    updateLivro(nome,preco,sinopse,editora,autor,tradutor,ano){
      let books = JSON.parse(localStorage.getItem("books"));
      let id = this.$route.query.id;
      for (let i = 0; i < books.length; i++) {
        if (parseInt(books[i].id) === parseInt(id)) {
          books[i].name = nome.value;
          books[i].price = preco.value;
          books[i].synopsis = sinopse.value;
          books[i].editor = editora.value;
          books[i].autor = autor.value;
          books[i].tradutor = tradutor.value;
          books[i].year = ano.value;
          books[i].categories = this.logicalCategoriesToNumerical();
          console.log(books[i].categories);
          break;
        }
      }
      localStorage.setItem("books",JSON.stringify(books));
      this.$router.go(0);
    },
    isAdmin(){
      let account = VueCookieNext.getCookie("account");
      if(account === null)
        return false;
      return account.adm === true;
    },
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
