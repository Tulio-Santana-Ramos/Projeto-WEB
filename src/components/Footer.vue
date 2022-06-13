<template>
  <div class="footer">
    <div style="margin-top: auto;margin-bottom: auto; padding-left:10px ;">
      <img src="@/components/icons/icon-branco.png" width="200vw">
    </div>
    <div class="txt-footer">
      <h2>Sobre nós</h2>
      <!-- TODO: Mudar o Lorem Ipsulum -->
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia,
        nunc et hendrerit ullamcorper, nibh ligula laoreet arcu, imperdiet ultrices lacus mi id turpis.
        Etiam cursus finibus magna consequat sagittis. Aenean viverra elit lectus, eu consectetur sapien lacinia ullamcorper.
        Etiam tincidunt sapien nunc, a egestas nisl aliquam ac. Nulla tempor feugiat augue, egestas fermentum nunc malesuada elementum. </p>
    </div>
    <div class="txt-footer link">
      <h2>Links</h2>
      <a href="#home/3">Home</a>
      <a href="#home/3">Carrinho</a>
      <a href="#home/3">Perfil do Cliente</a>
      <a href="#home/3">Biblioteca</a>
    </div>
    <div class="txt-footer">
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

.footer{
  display: flex;
  justify-content: space-between;
  background-color: #38B6FF;
  padding: 2em 0;
  color: white;
}

.txt-footer{
  display: flex;
  flex-direction: column;
  width: 30vw;
}

.txt-footer.link{
  width: 10vw;
}

.txt-footer a{
  text-decoration: none;
  color: white;
}

.txt-footer a:hover{
  color: rgb(68, 67, 67);
}
</style>