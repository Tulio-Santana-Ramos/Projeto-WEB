<template>
  <div class="book-container">
    <div style="display: flex">
      <div>
        <div class="promo" style="min-width: 530px">
          <p>Adicionar promoção:</p>
          <div class="input-group" style="padding-left: 15px">
            <div class="input-group-prepend">
              <div class="input-group input-container">
                <span id="" class="input-group-text" style="width: 159px">Quantidade</span>
                <input class="form-control" style="width:360px" type="text" ref="input_qtd"/>
              </div>
              <p/>
              <div class="input-group input-container">
                <span id="" class="input-group-text">Preço promocional</span>
                <input class="form-control" type="text" ref="input_newPreco"/>
              </div>
            </div>
          </div>
        </div>
        <div class="normal-data">
          <div class="synopsis">
            <div class="input-group input-container" style="text-align: right; width: 500px">
              <div class="input-group-prepend">
                <span id="" class="input-group-text">Título</span>
              </div>
              <input class="form-control" type="text" ref="input_nome"/>
            </div>
            <p/>
            <div class="input-group" style="text-align: right; width: 200px">
              <div class="input-group-prepend">
                <span id="" class="input-group-text">Preço</span>
              </div>
              <input class="form-control" type="text" ref="input_preco"/>
            </div>
            <p/>
            <div class="input-group" style="text-align: right; width: 200px">
              <div class="input-group-prepend">
                <span id="" class="input-group-text">Numero de Paginas</span>
              </div>
              <input class="form-control" type="text" ref="input_pag"/>
            </div>
            <p/>
            <div class="input-group" style="text-align: right; width: 500px; height: 300px">
              <div class="input-group-prepend">
            <span
                id=""
                class="input-group-text"
                style="height: 300px; min-width: 100px"
            >Descrição</span
            >
              </div>
              <input class="form-control" type="text" ref="input_desc"/>
            </div>
          </div>
        </div>
      </div>
      <div>
        <!-- upload da img funcionando, TODO: do pdf não -->
        <div style="display: flex; ">
        <div class="book-basics">
          <div class="DivinputImage">
            <iframe name="dummyframe" id="dummyframe" style="display: none"></iframe>
            <form  target="dummyframe"  action="http://localhost:8125/upload" method="post" enctype="multipart/form-data" ref="formImg">
              <label for="inputTag">
                Selecione a capa do livro <br/>
                <img src="@/components/icons/addBook.png" style="width: 60px"/>
                <input id="inputTag" class="inputImage" type="file" v-on:change="checkImg()" ref="img"  name="fileupload"/>
                <input type="hidden" v-bind:value="getNextId()" name="id">
                <br/>
                <span id="imageName"></span>

              </label>
            </form>
          </div>
        </div><div class="book-basics">
        <div class="DivinputImage">
          <iframe name="dummyframe" id="dummyframe" style="display: none"></iframe>
          <form  target="dummyframe"  action="http://localhost:8125/upload" method="post" enctype="multipart/form-data" ref="formPdf">
            <label for="inputTag">
              Selecione o PDF do livro <br/>
              <img src="@/components/icons/addBook.png" style="width: 60px"/>
              <input id="inputTag" class="inputImage" type="file" v-on:change="checkPdf()" ref="pdf"  name="fileupload"/>
              <input type="hidden" v-bind:value="getNextId()" name="id">
              <br/>
              <span id="imageName"></span>
            </label>
          </form>
        </div>
      </div>
        </div>
        <div class="home-book-info">
          <p class="title">Selecione as categorias</p>
          <ul v-for="category in getAllCategories()" class="category">
            <input v-model="checkBoxValues" type="checkbox" v-bind:value="category.id"><label>{{
              category.name
            }}</label>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="book-specifics">
    <div class="info">
      <p>Editora:</p>

      <div class="input-group" style="text-align: right; width: 500px">
        <div class="input-group-prepend">
          <span
              id=""
              class="input-group-text"
              style="height: 40px; min-width: 100px"
          >Editora</span
          >
        </div>
        <input class="form-control" type="text" ref="input_editora"/>
      </div>
    </div>
    <div class="info">
      <p>Autor(a):</p>

      <div class="input-group" style="text-align: right; width: 500px">
        <div class="input-group-prepend">
          <span
              id=""
              class="input-group-text"
              style="height: 40px; min-width: 100px"
          >Autor(a)</span
          >
        </div>
        <input class="form-control" type="text" ref="input_autor"/>
      </div>
    </div>
    <div class="info">
      <p>Tradutor(a):</p>

      <div class="input-group" style="text-align: right; width: 500px">
        <div class="input-group-prepend">
          <span
              id=""
              class="input-group-text"
              style="height: 40px; min-width: 100px"
          >Tradutor</span
          >
        </div>
        <input class="form-control" type="text" ref="input_tradutor"/>
      </div>
    </div>
    <div class="info">
      <p>Ano:</p>

      <div class="input-group" style="text-align: right; width: 500px">
        <div class="input-group-prepend">
          <span
              id=""
              class="input-group-text"
              style="height: 40px; min-width: 100px"
          >Ano</span
          >
        </div>
        <input class="form-control" type="text" ref="input_Ano"/>
      </div>
    </div>
  </div>

  <div class="buttons">
    <button class="btn btn-primary bag-book" type="button" @click="addBook();propagateChanges();">
      Adicionar e-book
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    checkPdf(){
      this.$refs.formPdf.submit();
    },checkImg(){
      console.log("OI");
      this.$refs.formImg.submit();
    },
    getNextId(){
      let books = JSON.parse(localStorage.getItem("books"));
      return books[books.length-1].id+1;
    },
    addBook(){
      let books = JSON.parse(localStorage.getItem("books"));
      let newBook = {};
      newBook.name = this.$refs.input_nome.value;
      newBook.pages = parseInt(this.$refs.input_pag.value);
      newBook.categories = this.checkBoxValues;
      newBook.price = parseFloat(this.$refs.input_preco.value);
      newBook.promo = {};
      if(this.$refs.input_qtd.value !== "" && parseInt(this.$refs.input_qtd.value )!== 0) {
        newBook.promo.is = true;
        newBook.promo.numberBooks = parseInt(this.$refs.input_qtd.value);
        newBook.promo.tempPrice = parseInt(this.$refs.input_newPreco.value);
      }else{
        newBook.promo.is = false;
        newBook.promo.numberBooks = 0;
        newBook.promo.tempPrice = 0;
      }

      newBook.synopsis = this.$refs.input_desc.value
      newBook.editor = this.$refs.input_editora.value;
      newBook.autor = this.$refs.input_autor.value;
      newBook.tradutor = this.$refs.input_tradutor.value;
      newBook.year = this.$refs.input_Ano.value;
      newBook.id = books[books.length-1].id+1;//Coloca o id do novo livro como o ultimo +1
      newBook.evaluations = [];
      books.push(newBook);
      localStorage.setItem("books",JSON.stringify(books));
    },
    getAllCategories() {
      return JSON.parse(localStorage.getItem("categories"))
    },
  },
  data() {
    return {
      checkBoxValues: [],
      imgFile: null,
      pdfFile: null,
    }
  },
  props:["propagateChanges"],
}
</script>
<style scoped>
.book-container {
  margin-top: 50px;
  padding-left: 100px;
}

.promo {
  color: white;
  font-size: 1.5em;
  text-align: center;

  margin-left: 50px;
  width: 30vw;
  background-color: #1b8c1f;
  border-radius: 10px;
  padding: 10px;
}

.book-basics {
  margin-top: 20px;
  margin-left: 20px;
  width: 25vw;
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
  padding-top: 5px;
  margin-left: 75px;
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
  flex-direction: column;
  align-content: center;
  margin-bottom: 40px;
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

.info {
  background-color: #38b6ff;
  color: #fff;
  padding: 10px 60px 10px 60px;

  height: 60px;
  display: flex;
  justify-content: space-between;
}

.info:nth-child(2n) {
  background-color: white;
  color: black;
}

.title-evaluation {
  text-align: center;
  margin: 2em 0;
  color: #257eb3;
}

.DivinputImage {
  text-align: center;
  padding: 3%;
  border: thin solid black;
}

.inputImage {
  display: none;
}

label {
  cursor: pointer;
}

#imageName {
  color: green;
}
</style>
