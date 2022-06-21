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
        />
      </div>

      <span style="color: red" ref="passError"></span>
      <br />
      <button type="button" class="btn btn-success" @click="submit()">CRIAR CONTA</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewAccount",
  props: ["adminReg", "nextPage"],
  data() {
    return {};
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
