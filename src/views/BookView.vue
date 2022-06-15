<script setup>
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";
import AdminMenu from "@/components/AdminMenu.vue";
import BookInfo from "@/components/BookInfo.vue";
import Evaluation from "@/components/avaliationResult.vue";
</script>


<template>
  <AdminMenu v-if="admin"></AdminMenu>
  <Menu v-else></Menu>
  <div class="adm-operations" v-if="admin">
    <button class="add-book"><img src="@/components/icons/addition.png" style="width: 50px; height: 50px;"/> Adicionar promoção</button>
    <button class="remove-book"><img src="@/components/icons/remove.png" style="width: 50px; height: 50px;"/> Excluir livro</button>
  </div>
  <div v-for="book in book_details">
    <BookInfo
      :name="book.name"
      :price="book.price"
      :categories="book.categories"
      :Isinpromo="book.promo"
      :quantidade="book.quantidade"
      :filename="book.img"
      :synopsis="book.synopsis"
      :editor="book.editor"
      :author="book.autor"
      :tradutor="book.tradutor"
      :year="book.year"
      
    />
  </div>
  <div class="book-stats">
    <div v-for="book in book_evaluation">
      <Evaluation :info="book.info" :stars="book.stars"></Evaluation>
    </div>
    
    
  </div>
  <Footer> </Footer>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      admin: true,
      book_details:[
        {
          name: "Harry Potter e a pedra filosofal",
          categories: ["Aventura", "Juvenil"],
          price: "30.90",
          promo: true ,
          quantidade: 10,
          img: "harry.jpg",
          synopsis: "Quando virou o envelope, com a mão trêmula, Harry viu um lacre de cera púrpura com um brasão; um leão, uma águia, um texugo e uma cobra circulando uma grande letra \"H\". Harry Potter nunca havia ouvido falar de Hogwarts quando as cartas começaram a aparecer no capacho da Rua dos Alfeneiros, nº 4. Escritos a tinta verde-esmeralda em pergaminho amarelado com um lacre de cera púrpura, as cartas eram rapidamente confiscadas por seus pavorosos tio e tia. Então, no aniversário de onze anos de Harry, um gigante com olhos que luziam como besouros negros chamado Rúbeo Hagrid surge com notícias surpreendentes: Harry Potter é um bruxo e tem uma vaga na Escola de Magia e Bruxaria de Hogwarts. Uma incrível aventura está para começar!",
          editor: "Pottermore Publishing",
          autor: "MOSS | J.K. ROWLING",
          tradutor: "LIA WYLER",
          year: 2015,
        }
      ],
      book_evaluation:[
        {
          info: "Muito mal escrito!",
          stars: 2,
        },
        {
          info: "Bom pra passar o tempo, mas nada impressionante",
          stars: 3,
        },
        {
          info: "Genial",
          stars: 4,
        },
        {
          info: "Muito mal escrito!",
          stars: 2,
        },
        {
          info: "Muito mal escrito!",
          stars: 2,
        },
      ],
    };
  },
};
</script>

<style scoped>

.evaluation {
  padding-left: 10px;
  border-style: solid;
  border-color: #fff #fff #38b6ff #fff;
}

.book-stats {
  color: black;
  font-size: 1.25em;
  margin-top: 5px;
  margin-bottom: 10px;
  border-style: solid;
  border-color: #38b6ff #fff #fff #fff;
}

.adm-operations {
  float:right;
  text-align: justify;
  text-align-last: right;
  padding-right: 25%;
  font-size: large;
  font-family: "Grape Nuts", cursive;
  font-family: "Open Sans", sans-serif;
}

.add-book {
  color: #1b8c1f;
  margin-right: 50px;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  font-weight: bold;
}

.remove-book {
  color: #aa320e;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  font-weight: bold;
}

.add-book:hover {
  color: #fff;
  background-color: rgb(20, 145, 57);
  border-radius: 10px;
}

.remove-book:hover {
  color: #fff;
  background-color: rgb(163, 33, 33);
  border-radius: 10px;
}

</style>
