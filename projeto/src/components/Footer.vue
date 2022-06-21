<template>
  <div class="footer" style="position: relative;bottom: 0;left: 0; width: 100%; height: 270px">
    <div style="margin-top: auto;margin-bottom: auto; padding-left:10px ;">
      <img src="@/components/icons/icon-branco.png" width="200vw">
    </div>
    <div class="txt-footer">
      <h2>Sobre nós</h2>
      <p>WEBOOK é uma plataforma de venda e leitura de Ebooks.
        O objetivo é ajudar você, usuário, a se encontrar no maravilhoso universo dos livros.
        Com o desenvolvimento da tecnologia, pode-se acessar uma quantidade muito maior de livros em apenas alguns
        cliques.
       
        Temos um catálogo vasto com livros para todos os gostos, temos certeza encontrará muitos títulos
        interessantes.</p>
    </div>
    <div class="txt-footer link">
      <h2>Links</h2>
      <a href="#home/3">Home</a>
      <a href="#home/3">Carrinho</a>
      <a href="#home/3">Perfil do Cliente</a>
      <a href="#home/3">Biblioteca</a>
    </div>
    <div class="txt-footer" style="width: 300px">
      <h2>Atendimento</h2>
      <p>Email: atendimento@webook.com</p>
      <p>Telefone: (16) 9959-6780</p>
      <p>Segunda - Sexta, 8h às 18h</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

.footer {
  display: flex;
  justify-content: space-evenly;
  background-color: #38B6FF;
  padding: 2em 0;
  color: white;
}

.txt-footer {
  display: flex;
  flex-direction: column;
  width: 30vw;
}

.txt-footer.link {
  width: 10vw;
}

.txt-footer a {
  text-decoration: none;
  color: white;
}

.txt-footer a:hover {
  color: rgb(68, 67, 67);
}
</style>