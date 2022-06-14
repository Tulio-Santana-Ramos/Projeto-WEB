<script setup>
import NewAccount from "@/components/NewAccount.vue";
</script>

<template>
    <img class="admin-pic" src="@/components/icons/admin-with-cogwheels.png"/>
    <h2 class="title">Adicionar admin</h2>
    <NewAccount/>
</template>

<style scoped>

.title{
    font-weight: normal;
    text-align: center;
    margin-top: 90px;
    margin-left: 175px;
}

.admin-pic{
    float: right;
    margin-top: 100px;
    margin-right: 50px;
    height: 120px;
}
</style>