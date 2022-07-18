<script setup>
import {VueCookieNext} from 'vue-cookie-next'

</script>

<template>
  <div id="centerDiv">
    <img src="@/components/icons/Logo-icone.png"
         style="padding: 10px; margin-right: auto; margin-left: auto;width:250px">


    <div style="margin-right: auto; margin-left: auto;">


      <div class="input-group input-container">
        <span class="input-group-text" style="max-height: 45px; max-width: 60px; padding-right: 20px">
          <img class="left-image" src="@/components/icons/email.png" style="width: 250%; height: 100%;">
        </span>
        <input class="form-control" placeholder="Email" ref="log"
               style="width: 350px;height: 45px;font-size: medium">
      </div>
      <br>
      <div class="input-group input-container" style="margin-right: auto; margin-left: auto;">
        <span class="input-group-text" style="max-height: 45px; max-width: 60px; padding-right: 20px">
          <img class="left-image" src="@/components/icons/password.png" style="width: 250%; height: 100%">
        </span>
        <input class="form-control" ref="pass" type="password" placeholder="Senha"
               style="height: 45px;font-size: medium">
        <div class="input-group-text right-span" style="max-height: 45px; max-width: 60px; padding-right: 20px"
             @click="swapPasswordView()">
          <img class="right-image" src="@/components/icons/eye.png" style="width: 250%; height: 100%">
        </div>
      </div>
      <br>
    </div>
    <div style="margin-right: auto; margin-left: auto;">
      <button type="button" @click="login()" class="btn btn-primary" style="padding: 20px 190px;margin-left: 20px">
        Entrar
      </button>

    </div>
    <span style="color: red; text-align:center;" ref="passError"></span>
    <br>
    <div style="display: flex; justify-content:space-around; width: 500px; margin-right: auto; margin-left: auto; ">
      <div>
        <a class="login-options" @click="goToNewPassword()">
          ESQUECI A SENHA
        </a>
      </div>
      <div>
        <a class="login-options" @click="goToNewClient()">
          CRIAR NOVA CONTA
        </a>
      </div>
    </div>
  </div>
  <div style="display: flex; justify-content:space-between; width: 70vw; margin-right: auto; margin-left: auto; ">
    <div>
      <a class="infos-botton" href="#condicoes" data-bs-target="#modalCardTerms" data-bs-toggle="modal">
        Condições de Uso
      </a>
    </div>

    <div id="modalCardTerms" class="modal" style="margin-top: 10px">
      <div class="modal-dialog">
        <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Condições de Uso</h4>
            <button class="btn-close" data-bs-dismiss="modal" type="button"></button>
          </div>

          <!-- Modal body -->
          <div class="modal-body" style="font-family: 'Grape Nuts', cursive; font-family: 'Open Sans', sans-serif;">
            <h1 style="font-weight: bolder; font-size: large;">Função</h1><br>
            <p>Este site foi criado e desenvolvido com a função de possibilitar a fácil a visualização de Ebooks de alta
              qualidade, a venda de produtos digitais e a divulgação de prestação de serviço. A WEEBOOK busca através da
              criação de conteúdo de alta qualidade, desenvolvido por profissionais da área, trazer o conhecimento ao
              alcance de todos, assim como a divulgação dos próprios serviços.</p>
            <h1 style="font-weight: bolder; font-size: large;">Termos</h1><br>
            <p>Ao continuar acessando o site, o VISITANTE expressa que aceita e entende todas as cláusulas, assim como
              concorda integralmente com cada uma delas, sendo este aceite imprescindível para a permanência na mesma.
              Caso o VISITANTE discorde de alguma cláusula ou termo, o mesmo deve imediatamente interromper sua
              navegação de todas as formas e meios.</p>
            <h1 style="font-weight: bolder; font-size: large;">Acesso</h1><br>
            <p>O Site e plataforma funcionam normalmente 24 (vinte e quatro) horas por dia, porém podem ocorrer pequenas
              interrupções de forma temporária para ajustes, manutenção, mudança de servidores, falhas técnicas ou por
              ordem de força maior, que podem deixar o site indisponível por tempo limitado. A WEEBOOK não se
              responsabiliza por nenhuma perda de oportunidade ou prejuízos que esta indisponibilidade temporária possa
              gerar aos usuários.</p>
            <h1 style="font-weight: bolder; font-size: large;">Licença</h1><br>
            <p>Todo o conteúdo do site é protegido por direitos autorais, e seu uso, cópia, transmissão, venda, cessão
              ou revenda, deve seguir a lei brasileira, tendo a WEEBOOK todos os seus direitos reservados, e não
              permitindo a cópia ou utilização de nenhuma forma e meio, sem autorização expressa e por escrita da
              mesma.</p>
          </div>

        </div>
      </div>
    </div>

    <div>
      <a class="infos-botton" href="#contato" data-bs-target="#modalCardContact" data-bs-toggle="modal">
        Entre em Contato
      </a>
    </div>

    <div id="modalCardContact" class="modal" style="margin-top: 200px">
      <div class="modal-dialog">
        <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Contato</h4>
            <button class="btn-close" data-bs-dismiss="modal" type="button"></button>
          </div>

          <!-- Modal body -->
          <div class="modal-body" style="font-family: 'Grape Nuts', cursive; font-family: 'Open Sans', sans-serif;">
            <h style="font-weight: bolder; font-size: large;">Email</h>
            <br>
            <p>atendimento@webook.com</p>
            <h style="font-weight: bolder; font-size: large;">Telefone</h>
            <br>
            <p>(16) 9959-6780</p>
            <h style="font-weight: bolder; font-size: large;">Atendimento Presencial</h>
            <br>
            <p>Segunda - Sexta, 8h às 18h</p>
          </div>

        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  methods: {
    /**
     * Troca o campo de senha para texto, libera a visualização do campo
     */
    swapPasswordView() {
      console.log(this.$refs.pass.type === "password");
      if (this.$refs.pass.type === "password")
        this.$refs.pass.type = "text";
      else
        this.$refs.pass.type = "password";
    },
    /**
     * Busca o usuário e verifica se a senha bate com a da base
     */
    async login() {
      let xhr = new XMLHttpRequest();
      let data = {email:this.$refs.log.value, senha:this.$refs.pass.value, op:"l"};

      let res = await fetch("http://localhost:3000/api/acc/", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      });
      if(res.status === 200){
        let json = await res.json();
        let account = {};
        account = json;
        account.adm = account.admin;
        VueCookieNext.setCookie("account", JSON.stringify(account));
        this.$router.push("/");
      }else{
        this.$refs.passError.innerText = "A senha e/ou e-mail estão incorretos";
      }


    },
    /**
     * Redefine a rota para criar novo usuario
     */
    goToNewClient() {
      this.$router.push("/novousuario");
    },
    /**
     * Redefine a rota para
     */
    goToNewPassword() {
      this.$router.push("/novachave");
    },
  },
}
</script>


<style scoped>
#centerDiv {
  display: flex;
  justify-content: center;
  align-content: center;
  height: 90vh;
  flex-direction: column;
}

.input-container {
  position: relative;
  margin-left: 10px !important;
}

::placeholder {
  color: #777;
  font-size: 20px;
}

.right-span:hover {
  background-color: #DDD;
  cursor: pointer;
}

.login-btn {
  background-color: #38B6FF;
  border: none;
  padding: 20px 185px;
  margin: 25px 0;
  margin-left: 22px;
  border-radius: 15px;
  color: white;
  font-weight: bolder;
  cursor: pointer;
}

.login-btn:hover {
  background-color: #1872a7;
}

.login-options:hover {
  background-color: #ddd;
  cursor: pointer;
}

.login-btn p {
  margin: 0;
}

.login-options {
  font-weight: bolder;
  color: black;
  text-decoration: none;
  padding: 1em;
  border-radius: 5px;
  margin-left: 22px;
}

.infos-botton {
  font-weight: bolder;
  color: #38B6FF;
  text-decoration: none;
  font-size: 25px;
  padding: 1em;
  border-radius: 5px;
  margin-left: 22px;
}

.infos-botton:hover {
  color: #227cb0;
}

button p {
  margin: 0;
}
</style>
