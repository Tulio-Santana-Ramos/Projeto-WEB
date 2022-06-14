<script setup>
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";
import BookInfo from "@/components/BookInfo.vue";

</script>

<template>
  <Menu></Menu>
  <div v-for="book in book_details">
    <BookInfo
        :name="book.name"
        :price="book.price"
        :categories="book.categories"
        :Isinpromo = "book.promo"
        :filename = "book.img"
        :synopsis = "book.synopsis"
    />
  </div>
  <Footer>

  </Footer>
  <!--
  TODO: Pagination
-->
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
          img: "harry.jpg",
          synopsis: "Quando virou o envelope, com a mão trêmula, Harry viu um lacre de cera púrpura com um brasão; um leão, uma águia, um texugo e uma cobra circulando uma grande letra \"H\". Harry Potter nunca havia ouvido falar de Hogwarts quando as cartas começaram a aparecer no capacho da Rua dos Alfeneiros, nº 4. Escritos a tinta verde-esmeralda em pergaminho amarelado com um lacre de cera púrpura, as cartas eram rapidamente confiscadas por seus pavorosos tio e tia. Então, no aniversário de onze anos de Harry, um gigante com olhos que luziam como besouros negros chamado Rúbeo Hagrid surge com notícias surpreendentes: Harry Potter é um bruxo e tem uma vaga na Escola de Magia e Bruxaria de Hogwarts. Uma incrível aventura está para começar!"
        }
      ],
    };
  },
};


</script>

<style scoped>

</style>
