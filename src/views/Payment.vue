<script setup>
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";
import Books from "@/components/BagBook.vue";
</script>

<template>
  <Menu></Menu>
  <div style="text-align: center; padding-top: 120px; padding-bottom: 20px">
            <span style="color: #38B6FF; font-size: 50px">Finalizar sua compra</span>
        </div>
        <div>
            <span style="padding-left: 50px" class="normal-text">
                1. Selecione um metodo de pagamento:
            </span><br>
            <span style="padding-left: 100px" class="normal-text">
                Seus cartões de crédito:
            </span>
            <div class="division-bar">
            </div>
            <div style="padding-left: 150px">
                <input type="radio" id="cartao1" name="card" value="card1" class="radio-payment">
                <label for="cartao1" class="normal-text">Nubank terminado em 1010 - Harry Potter</label>
                <br>
                <input type="radio" id="cartao2" name="card" value="card2" class="radio-payment">
                <label for="cartao2" class="normal-text">Banco do Brasil em 2020 - Hermione </label>
                <br>
                <span style="padding-left: 50px" > <a href="#addCard" class="normal-text add-card">+Adicionar novo cartão</a></span>
            </div>
            <br>
            <div style="padding-left: 100px">
                <span class="normal-text">
                    Boleto: <br>
                </span>
            </div>
            <div class="division-bar">
            </div>
            <div style="padding-left: 150px">
                <input type="radio" id="boleto" name="card" value="boleto" class="radio-payment">
                <label for="cartao1" class="normal-text">Vencimento em 1 dia útil</label>
            </div>
            <br>
            <div style="padding-left: 100px">
                <span class="normal-text">
                    PIX: <br>
                </span>
            </div>
            <div class="division-bar">
            </div>
            <div style="padding-left: 150px">
                <input type="radio" id="pix" name="card" value="pix" class="radio-payment">
                <label for="cartao1" class="normal-text">Vencimento em 30 minutos</label>
            </div>
        </div>

        <div style="padding-left: 150px; align-items: center;; margin: 40px 0;">
            <button class="btn-finaliza-escolha normal-text" onclick="window.location= 'finalizaCompra.html'" style="color: white; cursor: pointer;">
                Selecionar forma de pagamento
            </button>
        </div>
  
  <Footer></Footer>
</template>