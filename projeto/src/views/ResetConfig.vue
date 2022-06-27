<template>

</template>

<script>
import {VueCookieNext} from "vue-cookie-next";

export default {
  name: "ResetConfig",
  /**
   * Reseta todas as informações do banco
   */
  mounted() {
    VueCookieNext.setCookie("bag", '[]');
    localStorage.setItem("payment_forms", '[{"name": "Boleto", "life_time": "1 dia"},{"name": "Pix", "life_time": "30 minutos"}]');
    localStorage.setItem("books", '[ {"name":"Harry Potter e a pedra filosofal","pages":100,"categories":[ 2, 3],"price":"30.90","promo": {"is":true,"numberBooks":10,"tempPrice":5.00},"synopsis":"Quando virou o envelope, com a mão trêmula, Harry viu um lacre de cera púrpura com um brasão; um leão, uma águia, um texugo e uma cobra circulando uma grande letra \\"H\\". Harry Potter nunca havia ouvido falar de Hogwarts quando as cartas começaram a aparecer no capacho da Rua dos Alfeneiros, nº 4. Escritos a tinta verde-esmeralda em pergaminho amarelado com um lacre de cera púrpura, as cartas eram rapidamente confiscadas por seus pavorosos tio e tia. Então, no aniversário de onze anos de Harry, um gigante com olhos que luziam como besouros negros chamado Rúbeo Hagrid surge com notícias surpreendentes: Harry Potter é um bruxo e tem uma vaga na Escola de Magia e Bruxaria de Hogwarts. Uma incrível aventura está para começar!","editor":"Pottermore Publishing","autor":"MOSS | J.K. ROWLING","tradutor":"LIA WYLER","year":2015,"id":0,"evaluations":[ {"info":"Muito mal escrito!","stars":2 }, {"info":"Bom pra passar o tempo, mas nada impressionante","stars":3 }, {"info":"Genial","stars":4 }, {"info":"Muito mal escrito!","stars":2 }, {"info":"Muito mal escrito!","stars":2 }] }, {"name":"Eragon","pages":100,"categories":[ 2, 3],"price":"30.90","promo": {"is":true,"numberBooks":1,"tempPrice":5.00},"synopsis":"O Reino de Alagaësia é governado pelo maligno rei Galbatorix, um antigo Cavaleiro de Dragão que traiu seu povo e seus companheiros em busca de poder. Quando Eragon, um garoto órfão que vive em uma pequena fazenda, encontra uma pedra azul, seu destino muda, pois o objeto na verdade era um ovo de dragão do último sobrevivente da raça. A dragão fêmea Saphira nasce do ovo e Eragon se torna um Cavaleiro, que luta contra o Espectro Durza e o exército de Galbatorix, cumprindo uma antiga profecia.","editor":"Paolini LLC","autor":"Christopher Paolini","tradutor":"?","year":2003,"id":1,"evaluations":[ {"info":"Muito mal escrito!","stars":2 }, {"info":"Bom pra passar o tempo, mas nada impressionante","stars":3 }, {"info":"Genial","stars":4 }, {"info":"Muito mal escrito!","stars":2 }, {"info":"Muito mal escrito!","stars":2 }] }, {"name":"Crepusculo","pages":100,"categories":[ 0, 3],"price":"30.90","promo": {"is":false,"numberBooks":0,"tempPrice":0},"synopsis":"Isabella Swan chega à nublada e chuvosa cidadezinha de Forks - último lugar onde gostaria de viver. Tenta se adaptar à vida provinciana na qual aparentemente todos se conhecem, lidar com sua constrangedora falta de coordenação motora e se habituar a morar com um pai com quem nunca conviveu.","editor":"Little, Brown and Company","autor":"Stephenie Meyer","tradutor":"?","year":2005,"id":2,"evaluations":[ {"info":"Muito mal escrito!","stars":2 }, {"info":"Bom pra passar o tempo, mas nada impressionante","stars":3 }, {"info":"Genial","stars":4 }, {"info":"Muito mal escrito!","stars":2 }, {"info":"Muito mal escrito!","stars":2 }] }, {"name":"Frankenstein","pages":100,"categories":[ 1],"price":"30.90","promo": {"is":false,"numberBooks":0,"tempPrice":0},"synopsis":"O livro narra a história do ousado doutor Victor Frankenstein, cientista que se lança no experimento de retomar a vida de um ser inanimado. Isso resulta na concepção de uma criatura sobre-humana e monstruosa que passa a lhe perseguir, tornando-se um arquétipo de seu próprio criador.","editor":"?","autor":"Mary Shelley","tradutor":"Mário Martins Carvalho","year":1972,"id":3,"evaluations":[ {"info":"Muito mal escrito!","stars":2 }, {"info":"Bom pra passar o tempo, mas nada impressionante","stars":3 }, {"info":"Genial","stars":4 }, {"info":"Muito mal escrito!","stars":2 }, {"info":"Muito mal escrito!","stars":2 }] }]');
    localStorage.setItem("accounts", '[{"email":"admin","phone":"","name":"adm1","senha":"admin","admin":true,"id":0},{"email":"login","phone":"","name":"João da Silva","senha":"senha","admin":false,"id":1,"cards":[{"name":"Harry Potter","CVV":101,"expiration":"05/06/2001", "code":"000000000000000"},{"name":"Harry Potter","CVV":101,"expiration":"05/06/2001", "code":"000000000000012"}]},{"email":"c","senha":"c","admin":true,"name":"Clara","phone":"","id":2},{"email":"e","senha":"e","admin":true,"name":"Eduardo","phone":"","id":3},{"email":"t","senha":"t","admin":true,"name":"Tulio","phone":"","id":4}]');
    localStorage.setItem("categories", '[{"name":"Romance","id":0},{"name":"Sci-fy","id":1},{"name":"Aventura","id":2},{"name":"Juvenil","id":3}]');
    localStorage.setItem("buys", "[]");
    localStorage.setItem("libraries", '[{"user":1,"lib":[{"id":0,"eval":false},{"id":2,"eval":false}]}]');
  }
}
</script>

<style scoped>

</style>