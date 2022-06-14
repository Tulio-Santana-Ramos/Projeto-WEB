<script setup>
import NewAccount from "@/components/NewAccount.vue";
</script>

<template>
    <h2 class="title">CRIAR CONTA</h2>
    <img class="user-pic" src="@/components/icons/user.png"/>
    <NewAccount/>
    <p class="use-conditions">Condições de uso</p>
    <p class="contact">Entre em contato</p>
</template>

<style scoped>
.user-pic{
    float: right;
    margin-top: 75px;
    margin-right: 50px;
    height: 120px;
}

.title{
    font-weight: normal;
    display: flex;
    width: 50%;
    height: 200px;
    margin-left: 475px;
    align-items:center;
    justify-content:center;
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