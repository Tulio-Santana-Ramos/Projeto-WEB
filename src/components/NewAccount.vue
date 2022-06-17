<script setup>
import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
</script>

<template>
    <img class="logo" src="@/components/icons/Logo-icone.png"/>
    <div class="new-acc">
        <p class="field">
            Nome: <input type="text" placeholder="Nome" ref="name"/>
        </p>
        <p class="field">
            E-mail: <input type="email" placeholder="E-mail" ref="email"/>
        </p>
        <p class="field">
            Telefone: <input type="text" placeholder="Telefone" ref="phone"/>
        </p>
        <p class="field">
            Senha: <input type="password" placeholder="Senha" ref="pass"/>
        </p>
        <p class="field">
            Confirme Senha: <input type="password" placeholder="Confirme Senha" ref="pass2"/>
        </p>
        <span style="color: red" ref="passError"></span>
      <br>
        <button class="create" @click="submit()">CRIAR CONTA</button>
    </div>
</template>

<script>

export default {
  name: "NewAccount",
  props:["adminReg","nextPage"],
  data() {
    return {

    };
  },
  methods: {
    submit() {
      if (this.$refs.pass.value !== this.$refs.pass2.value) {
        this.$refs.passError.innerText = "As senhas não conhecidem";
      }
      let accs = JSON.parse(localStorage.getItem("accounts"));
      let newAccount = {};
      newAccount.email = this.$refs.email.value;
      newAccount.senha = this.$refs.pass.value;
      newAccount.admin = this.adminReg;
      newAccount.name = this.$refs.name.value;
      newAccount.phone = this.$refs.phone.value;
      newAccount.id = accs.length;
      accs.push(newAccount);
      localStorage.setItem("accounts",JSON.stringify(accs));
      this.$router.push(this.nextPage);
    }
  },
};
</script>

<style scoped>

.logo{
    float: left;
    margin-top: 20px;
}

.new-acc{
    font-size: 1.5em;
    font-family: 'Grape Nuts', cursive;
    font-family: 'Open Sans', sans-serif;
    position: fixed; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.field{
    width: 400px;
    height: 70px;
    margin-bottom: 25px;
    text-align: left;
}

.field input{
    border-style: solid;
    border-radius: 10px;
    width: 500px;
    height: 50px;
    border-color: black;
}

.create{
    border-radius: 10px;
    background-color: #38B6FF;
    color: #fff;
    text-align: center;
    width: 500px;
    height: 80px;
}

.create:hover{
    background-color: #1872a7;
}
</style>