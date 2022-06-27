<script setup>
import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
</script>

<template>
  <div class="body-new-acc">
    <div class="new-acc">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">Nome:</span>
        </div>
        <input
          type="text"
          class="form-control"
          aria-label="Nome"
          aria-describedby="inputGroup-sizing-default"
          ref="name"
          v-model="this.nome"
        />
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">E-mail:</span>
        </div>
        <input
          type="text"
          class="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          ref="email"
          v-model="this.email"
        />
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">Telefone:</span>
        </div>
        <input
          type="text"
          class="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          ref="phone"
          v-model="this.tel"
        />
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">Senha:</span>
        </div>
        <input
          type="password"
          class="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          ref="pass"
          v-model="this.pass1"
        />
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default"
            >Confirme sua senha:</span
          >
        </div>
        <input
          type="password"
          class="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          ref="pass2"
          v-model="this.pass2"
        />
      </div>

      <span style="color: red" ref="passError"></span>
      <br />
      <button type="button" class="btn btn-success" @click="submit()" disabled ref="btn">CRIAR CONTA</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewAccount",
  props: ["adminReg", "nextPage"],
  data() {
    return {
      nome:"",
      email:"",
      tel:"",
      pass1:"",
      pass2:""
    };
  },
  watch:{
    nome(){
      this.validateFields();
    },
    email(){
      this.validateFields();
    },
    tel(){
      this.validateFields();
    },
    pass1(){
      this.validateFields();
    },
    pass2(){
      this.validateFields();
    }
  },
  methods: {
    validateFields(){
      this.$refs.btn.disabled = (this.nome == "" ||this.email == "" ||this.tel == "" ||this.pass1 == "" ||this.pass2 == "" );
    },
    submit() {
      if (this.$refs.pass.value !== this.$refs.pass2.value) {
        this.$refs.passError.innerText = "As senhas não conhecidem";
        return ;
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
      localStorage.setItem("accounts", JSON.stringify(accs));
      this.$router.push(this.nextPage);
    },
  },
};
</script>

<style scoped>
.new-acc {
  width: 50vw;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.body-new-acc {
  justify-content: center;
  margin: 20px 0;
}

.input-group-text{
  min-width: 100px;
}
</style>
