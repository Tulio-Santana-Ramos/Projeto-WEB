<script setup>
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";
import BookInfo from "@/components/BookInfo.vue";
    import Evaluation from "@/components/avaliationResult.vue";
</script>


<template>
  <Menu></Menu>
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

</style>
