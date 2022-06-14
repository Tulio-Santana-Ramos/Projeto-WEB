<script setup>
import NewAccount from "@/components/NewAccount.vue";
</script>

<template>
    <h2 class="title">CRIAR CONTA</h2>
    <NewAccount/>
    <p class="use-conditions">Condições de uso</p>
    <p class="contact">Entre em contato</p>
</template>

<style scoped>

.title{
    font-weight: normal;
    text-align: center;
    margin-top: 90px;
}
.use-conditions{
    color: #38B6FF;
    margin-left: 400px;
    margin-top: 75px;
    font-size: 1.5em;
    display: inline-block;
}

.contact{
    color: #38B6FF;
    margin-left: 760px;
    margin-top: 75px;
    font-size: 1.5em;
    display: inline-block;
}
.use-conditions:hover{
    color: black;
}

.contact:hover{
    color: black;
}
</style>