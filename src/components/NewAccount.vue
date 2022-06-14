<script setup>
import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
</script>

<template>
    <img class="logo" src="@/components/icons/Logo-icone.png"/>
    <div class="new-acc">
        <p class="field">
            Nome:<br>
            <input type="text" placeholder="Nome" v-model="nome"/>
        </p>
        <p class="field">
            E-mail:<br>
            <input type="text" placeholder="E-mail" v-model="email"/>
        </p>
        <p class="field">
            Telefone:<br>
            <input type="text" placeholder="Telefone" v-model="phone"/>
        </p>
        <p class="field">
            Senha:<br>
            <input type="password" placeholder="Senha" v-model="password.password"/>
        </p>
        <p class="field">
            Confirme Senha:<br>
            <input type="password" placeholder="Confirme Senha" v-model="password.confirm"/>
        </p>
        <button class="create" @click="submit">CRIAR CONTA</button>
    </div>
</template>

<script>

export default {
  name: "NewAccount",
  data() {
    return {
        v$: useValidate(),
        nome: "",
        email: "",
        phone: "",
        password: {
            password: "",
            confirm: "",
        },
    };
  },
  validations(){
    return{
        nome: { required },
        email: { required },
        password: {
            password: { required },
            confirm: { required },
        }
    }
  },
  methods: {
    submit() {
        this.v$.$validate();
        if(!this.v$.$error){
            alert('Conta criada com sucesso!');
        }else{
            alert('Houve um erro com os dados inseridos');
        }
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
    height: 100px;
    padding-bottom: 15px;
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