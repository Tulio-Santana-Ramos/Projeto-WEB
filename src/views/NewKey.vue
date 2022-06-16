

<template>
    <div id="centerDiv">
        <img src="@/components/icons/Logo-icone.png" width="250px"
            style="padding: 10px; margin-right: auto; margin-left: auto;">


        <div style="margin-right: auto; margin-left: auto;">


            <div class="input-group input-container" >
                <span class="input-group-text" style="max-height: 45px; max-width: 60px; padding-right: 20px">
                <img class="left-image" src="@/components/icons/email.png" style="width: 250%; height: 100%;">
                </span>
                <input class="form-control" placeholder="Email Cadastrado"
                    style="width: 350px;height: 45px;font-size: medium">
            </div>
            <br>
            <div class="input-group input-container" style="margin-right: auto; margin-left: auto;">
                <span class="input-group-text" style="max-height: 45px; max-width: 60px; padding-right: 20px">
                <img class="left-image" src="@/components/icons/password.png" style="width: 250%; height: 100%">
                </span>
                <input class="form-control" type="password" placeholder="Nova Senha" style="height: 45px;font-size: medium">
                <span class="input-group-text right-span" style="max-height: 45px; max-width: 60px; padding-right: 20px">
                <img class="right-image" src="@/components/icons/eye.png" style="width: 250%; height: 100%">
                </span>
            </div>
            <br>
            <div class="input-group input-container" style="margin-right: auto; margin-left: auto;">
                <span class="input-group-text" style="max-height: 45px; max-width: 60px; padding-right: 20px">
                <img class="left-image" src="@/components/icons/password.png" style="width: 250%; height: 100%">
                </span>
                <input class="form-control" type="password" placeholder="Confirmar Nova Senha" style="height: 45px;font-size: medium">
                <span class="input-group-text right-span" style="max-height: 45px; max-width: 60px; padding-right: 20px">
                <img class="right-image" src="@/components/icons/eye.png" style="width: 250%; height: 100%">
                </span>
            </div>
            <br>
        </div>

        <div style="margin-right: auto; margin-left: auto;">
            <div class="login-btn"  data-bs-target="#modalCardNewKey" data-bs-toggle="modal">
                <p>Salvar Alteração</p>
            </div>
        </div>

        <div id="modalCardNewKey" class="modal" style="margin-top: 200px">
          <div class="modal-dialog">
            <div class="modal-content">

              <!-- Modal Header -->
              <div class="modal-header">
                <h4 class="modal-title">Senha Alterada com sucesso!</h4>
                <button class="btn-close" data-bs-dismiss="modal" type="button" @click="goToLogin()"></button>
              </div>

              <!-- Modal body -->
              <div class="modal-body" style="font-family: 'Grape Nuts', cursive; font-family: 'Open Sans', sans-serif;">
                <p>Todos os procedimentos foram seguidos corretamente e sua senha foi alterada.
                  Agora, pode retornar à tela de login para acessar sua conta.
                </p>
              </div>

            </div>
          </div>
        </div>
    
    </div>
</template>

<script>
export default {
  methods: {
    goToLogin() {
      this.$router.push("/login");
    }
  }
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

.right-span:hover{
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