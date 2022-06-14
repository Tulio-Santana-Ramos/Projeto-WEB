<script setup>
import Modal from "@/components/Modal.vue";

</script>

<template>
 <div id="centerDiv" >
        <img src="@/components/icons/Logo-icone.png" width="250px" style="padding: 10px; margin-left: 100px; margin-right: auto; margin-left: auto;">
        <div style="align-items: center">
          <div class="input-group input-container" style="margin-right: auto; margin-left: auto;">
            <span class="input-group-text" style="max-height: 45px; max-width: 60px; padding-right: 20px">
              <img class="left-image" src="@/components/icons/email.png" style="width: 250%; height: 100%;">
            </span>
            <input class="form-control loginFields" placeholder="Email" style="max-width: 409px;height: 45px;font-size: medium">
          </div>
          <br>
          <div class="input-group input-container" style="margin-right: auto; margin-left: auto;">
            <span class="input-group-text" style="max-height: 45px; max-width: 60px; padding-right: 20px"><img class="left-image" src="@/components/icons/password.png" style="width: 250%; height: 100%"></span>
            <input class="loginFields" placeholder="Senha" style="height: 45px;font-size: medium">
            <span class="input-group-text" style="max-height: 45px; max-width: 60px; padding-right: 20px"><img class="right-image" src="@/components/icons/eye.png" style="width: 250%; height: 100%"></span>
          </div>

          <br>
        </div>
        <div class="input-container" style="margin-right: auto; margin-left: auto;">

        </div>

        <div style="margin-right: auto; margin-left: auto;">
            <div class="login-btn" >
                <p>Entrar</p>
            </div>

        </div>

        <div style="display: flex; justify-content:space-around; width: 500px; margin-right: auto; margin-left: auto; ">
            <div>
                <a class="login-options" href="#esqueci">
                    ESQUECI A SENHA
                </a>
            </div>
            <div>
                <a class="login-options" href="#nova">
                    CRIAR NOVA CONTA
                </a>

            </div>
        </div>
    </div>
    <div style="display: flex; justify-content:space-between; width: 70vw; margin-right: auto; margin-left: auto; ">
        <div>
            <a class="infos-botton" href="#condicoes">
                Condições de Uso
            </a>
        </div>
        
        <div>
            <a class="infos-botton" href="#contato">
                Entre em Contato
            </a>

        </div>
    </div>
    <Modal></Modal>
</template>



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
    margin-left: 40px;

}

::placeholder{
    color: #777;
    font-size: 20px;
}

.loginFields{
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.05);
    width: 350px;
    height: 30px;
    border-radius: 5px;
    text-decoration: none;
    padding: 8px 12px;
    margin-left: 25px;
    background-color: #fff;
    border: 1px solid #000;
    font-size: 1.5vw;
}
.input-container > .left-image {
    position: absolute;
    top: 10px;
    left: 30px;
    width: 30px;

}
.input-container > .right-image {
    position: absolute;
    top: 10px;
    right: 7%;
    width: 30px;
}

.input-container > input {
    padding-left: 40px;
}

.login-btn{
    background-color: #38B6FF;
    border: none;
    padding: 20px 185px;
    margin: 25px 0;
    margin-left: 22px ;
    border-radius: 15px;
    color: white;
    font-weight: bolder;
    cursor: pointer;  
}

.login-btn:hover{
    background-color: #1872a7;
     
}

.login-options:hover{
    background-color: #ddd;
    
}

.login-btn p{
    margin: 0;
}

.login-options{
    font-weight: bolder;
    color: black;
    text-decoration: none;
    padding: 1em;
    border-radius: 5px;
    margin-left: 22px ;
}
.infos-botton{
    font-weight: bolder;
    color: #38B6FF;
    text-decoration: none;
    font-size: 25px;
    padding: 1em;
    border-radius: 5px;
    margin-left: 22px ;
}

.infos-botton:hover{
    color: #227cb0;
}
button p{
    margin: 0;
}
</style>
