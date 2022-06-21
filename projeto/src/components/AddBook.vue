<template>
  <!-- The Modal -->
  <div id="modal-add-card" class="modal" style="margin-top: 200px">
    <div class="modal-dialog">
      <div class="modal-content">

        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Adicionar nova categoria</h4>
          <button class="btn-close" data-bs-dismiss="modal" type="button"></button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
          <div>
            <div class="input-group input-container">
                      <span class="input-group-text" style="width: 87px;">
                        Nome
                      </span>
              <input class="form-control" placeholder="Nome da categoria"
                     style="width: 350px;height: 45px;font-size: medium"
                     ref="input_nome">
            </div>
          </div>
        </div>

        <!-- Modal footer -->
        <div class="modal-footer">
          <button class="btn btn-primary" data-bs-dismiss="modal"
                  @click="addCategory(this.$refs.input_nome.value)"
                  type="button">Adicionar
          </button>
          <button class="btn btn-danger" data-bs-dismiss="modal" type="button">Cancelar</button>
        </div>

      </div>
    </div>
  </div>
  <div>
    <div class="container-main">
      <div class="container-main-left">
        <img src="../components/icons/addBookPage.png"
             style="height: 150px; display: block;  margin-left: auto;  margin-right: auto;"/>
        <div class="container-uploads">
          <div class="container-upload">
            <div class="div-input-upload">
              <iframe id="dummy-frame" name="dummy-frame"></iframe>
              <form ref="form_upload_image" action="http://localhost:8125/upload" enctype="multipart/form-data"
                    method="post" target="dummy-frame">
                <label for="input-image" >
                  <span ref="lbl_img"> Selecione a capa do livro </span>
                  <br/>
                  <!-- TODO: colocar um marcador que foi enviado o arquivo -->
                  <img src="@/components/icons/addBook.png" style="width: 60px" ref="img_img"/>
                  <input id="input-image" ref="img" class="input-file-hidden" name="file-upload" type="file"
                         v-on:change="checkImg()"/>
                  <input name="id" type="hidden" v-bind:value="getNextId()">
                </label>
              </form>
            </div>
          </div>
          <div class="container-upload">
            <div class="div-input-pdf div-input-upload">
              <form ref="form_upload_pdf" action="http://localhost:8125/upload" enctype="multipart/form-data"
                    method="post" target="dummy-frame">
                <label for="input-pdf" >
                  <span ref="lbl_pdf"> Selecione o PDF do livro </span>
                  <br/>
                  <img src="@/components/icons/addBook.png" style="width: 60px" ref="img_pdf"/>
                  <input id="input-pdf" ref="pdf" class="input-file-hidden" name="file-upload" type="file"
                         v-on:change="checkPdf()"/>
                  <input name="id" type="hidden" v-bind:value="getNextId()">
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="container-main-center">
        <div class="container-main-center-top">
          <div class="container-promotion container-infos-exhibition" style="min-width: 100%">
            <p>
              Adicionar promoção:
            </p>
            <div class="input-group" style="padding-left: 15px">
              <div class="input-group-prepend">
                <div class="input-group input-container">
              <span id="" class="input-group-text" style="width: 159px">
                  Quantidade
              </span>
                  <input ref="input_qtd" class="form-control" style="width:500px" type="text"/>
                </div>
                <p/>
                <div class="input-group input-container">
              <span id="" class="input-group-text">
                  Preço promocional
              </span>
                  <input ref="input_new_price" class="form-control" type="text"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-main-center-bot">
          <div class="container-infos-exhibition container-normal-info" style="min-width: 100%">
            <p>
              Adicionar dados:
            </p>
            <div class="input-group input-container">
              <div class="input-group-prepend">
                  <span id="" class="input-group-text">
                      Título
                  </span>
              </div>
              <input ref="input_name" class="form-control" type="text"/>
            </div>
            <p/>
            <div class="input-group">
              <div class="input-group-prepend">
                  <span id="" class="input-group-text">
                      Preço normal
                  </span>
              </div>
              <input ref="input_price" class="form-control" type="text"/>
            </div>
            <p/>
            <div class="input-group">
              <div class="input-group-prepend">
                  <span id="" class="input-group-text">
                      Numero de Paginas
                  </span>
              </div>
              <input ref="input_number_page" class="form-control" type="text"/>
            </div>
            <p/>
            <div class="container-main" style="display: flex">
              <div class="input-group" style="height: 300px;margin-bottom: 15px;" >
                <div class="input-group-prepend">
                      <span id="" class="input-group-text" style="height: 300px; min-width: 100px">
                        Descrição
                      </span>
                </div>
                <textarea class="form-control"  ref="input_description" style="border-radius: 10px"/>
                <br/>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="container-main-right">
        <div class="container-categories">
          <p class="title">Selecione as categorias</p>
          <ul v-for="category in categories" class="category">
            <input v-model="checkBoxValues" type="checkbox" v-bind:value="category.id">
            <label>
              {{ category.name }}
            </label>
          </ul>
          <button class="btn btn-secondary" style="width: 95%; margin-left: 5px" data-bs-target="#modal-add-card"
                  data-bs-toggle="modal"> Adicionar nova categoria
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="book-specifics">
    <div class="info">
      <p>
        Editora:
      </p>
      <div class="input-group" style="text-align: right; width: 500px">
        <div class="input-group-prepend">
          <span id="" class="input-group-text" style="height: 40px; min-width: 100px">
              Editora
          </span>
        </div>
        <input ref="input_editora" class="form-control" type="text"/>
      </div>
    </div>
    <div class="info">
      <p>
        Autor(a):
      </p>
      <div class="input-group" style="text-align: right; width: 500px">
        <div class="input-group-prepend">
          <span id="" class="input-group-text" style="height: 40px; min-width: 100px">
              Autor(a)
          </span>
        </div>
        <input ref="input_autor" class="form-control" type="text"/>
      </div>
    </div>
    <div class="info">
      <p>
        Tradutor(a):
      </p>
      <div class="input-group" style="text-align: right; width: 500px">
        <div class="input-group-prepend">
          <span id="" class="input-group-text" style="height: 40px; min-width: 100px">
              Tradutor
          </span>
        </div>
        <input ref="input_tradutor" class="form-control" type="text"/>
      </div>
    </div>
    <div class="info">
      <p>
        Ano:
      </p>
      <div class="input-group" style="text-align: right; width: 500px">
        <div class="input-group-prepend">
          <span id="" class="input-group-text" style="height: 40px; min-width: 100px">
              Ano
          </span>
        </div>
        <input ref="input_Ano" class="form-control" type="text"/>
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
  props: ["propagateChanges"],
  mounted() {
    this.categories = this.getAllCategories();
  },
  data() {
    return {
      checkBoxValues: [],
      imgFile: null,
      pdfFile: null,
      categories: []
    }
  },
  methods: {
    addCategory(nome) {
      let categories = this.getAllCategories();
      for (const category of categories) {
        if (category.name.toLowerCase() === nome.toLowerCase()) {
          return;
        }
      }
      let newCategory = {};
      newCategory.name = nome;
      newCategory.id = categories[categories.length - 1].id + 1;
      categories.push(newCategory);
      localStorage.setItem("categories", JSON.stringify(categories));
      this.categories = categories;
    },
    checkPdf() {
      this.$refs.img_pdf.src = "./src/components/icons/done.png";
      this.$refs.lbl_pdf.innerText = "Upload feito";
      this.$refs.form_upload_pdf.submit();
    },
    checkImg() {
      this.$refs.img_img.src = "./src/components/icons/done.png";
      this.$refs.lbl_img.innerText = "Upload feito";
      this.$refs.form_upload_image.submit();
    },
    getNextId() {
      let books = JSON.parse(localStorage.getItem("books"));
      return books[books.length - 1].id + 1;
    },
    addBook() {
      let books = JSON.parse(localStorage.getItem("books"));
      let newBook = {};
      newBook.name = this.$refs.input_name.value;
      newBook.pages = parseInt(this.$refs.input_number_page.value);
      newBook.categories = this.checkBoxValues;
      newBook.price = parseFloat(this.$refs.input_price.value);
      newBook.promo = {};
      if (this.$refs.input_qtd.value !== "" && parseInt(this.$refs.input_qtd.value) !== 0) {
        newBook.promo.is = true;
        newBook.promo.numberBooks = parseInt(this.$refs.input_qtd.value);
        newBook.promo.tempPrice = parseInt(this.$refs.input_new_price.value);
      } else {
        newBook.promo.is = false;
        newBook.promo.numberBooks = 0;
        newBook.promo.tempPrice = 0;
      }
      newBook.synopsis = this.$refs.input_description.value;
      newBook.editor = this.$refs.input_editora.value;
      newBook.autor = this.$refs.input_autor.value;
      newBook.tradutor = this.$refs.input_tradutor.value;
      newBook.year = this.$refs.input_Ano.value;
      newBook.id = books[books.length - 1].id + 1;//Coloca o id do novo livro como o ultimo +1
      newBook.evaluations = [];
      books.push(newBook);
      localStorage.setItem("books", JSON.stringify(books));
    },
    getAllCategories() {
      return JSON.parse(localStorage.getItem("categories"))
    }
  },

}
</script>
<style scoped>
.container-main {
  display: flex;
  justify-content: space-evenly;
}

.container-main-left {
  max-width: 200px;
}

.container-uploads {
  margin: 10px;
  display: block;
  background-color: #38b6ff;
  border-radius: 10px;
  padding: 10px;
}

.container-upload {
  padding: 10px;
}

.div-input-upload {
  text-align: center;
  padding: 3%;
  border: none;
}

.container-main-center {
  min-width: 700px;
}

.container-main-center-top {
  display: flex;
}

.container-infos-exhibition {
  color: white;
  font-size: 1.5em;
  text-align: center;
  width: 30vw;
  padding: 10px;
}

.container-promotion {
  background-color: #1b8c1f;
  border-radius: 10px 10px 0 0;
}

.container-normal-info {
  background-color: #38b6ff;
  border-radius: 0 0 10px 10px;
}

.container-normal-info span {
  width: 170px;
}

.container-normal-info .input-group {
  padding: 10px;
}

.container-normal-info input {
  width: 300px;
}

.container-categories {
  margin-left: 15px;
  background-color: #1b8c1f;
  padding: 20px;
  border-radius: 10px;
}


.div-input-upload {
  background-color: #CCC;
  border-radius: 15px;
}

#dummy-frame {
  display: none;
}

.title {
  font-size: 1.5em;
}

.category {
  background-color: #38b6ff;
  color: #fff;
  font-size: large;
  margin: 5px;
  border-radius: 10px;
}

.category:nth-child(2n) {
  color: black;
  background-color: white;
  font-size: large;
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


.input-file-hidden {
  display: none;
}

label {
  cursor: pointer;
}

#imageName {
  color: green;
}
</style>
