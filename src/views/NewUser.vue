<script setup>
import NewAccount from "@/components/NewAccount.vue";
</script>

<template>
    <img class="user-pic" src="@/components/icons/user.png"/>
    <h2 class="title">CRIAR CONTA</h2>
    <NewAccount/>
    <p class="use-conditions">Condições de uso</p>
    <p class="contact">Entre em contato</p>
</template>

<style scoped>
.user-pic{
    float: right;
    margin-top: 100px;
    margin-right: 50px;
    height: 120px;
}

.title{
    font-weight: normal;
    text-align: center;
    margin-top: 90px;
}
.use-conditions{
    color: #38B6FF;
    font-size: 1.5em;
    display: inline-block;
    bottom: 0%;
    position: fixed;
}

.contact{
    color: #38B6FF;
    font-size: 1.5em;
    display: inline-block;
    margin-left: 60%;
    bottom: 0%;
    position:fixed;
}
.use-conditions:hover{
    color: black;
}

.contact:hover{
    color: black;
}
</style>