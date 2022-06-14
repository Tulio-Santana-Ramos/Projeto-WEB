<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand"  @click="goToHome()" ><img class="img-navbar navbar-brand" src="@/components/icons/logo.png"  style=" width:80px;height: 80px; padding: 10px;"></a>
      <a class="navbar-brand" @click="goToBiblioteca()" ><img class="img-navbar navbar-brand" src="@/components/icons/livro.png" style="padding: 10px;margin-bottom: 10px; width: 75%; height: 75%"><span class="txt-navbar" >Biblioteca</span></a>
      <select name="livros" id="book-select" style=" margin-left: 80px;margin-top: 15px " class="form-select form-select-lg mb-3">
        <option value="" disabled selected hidden>Selecione a categoria</option>
        <option value="romance">Romance</option>
        <option value="scifi">Sci-Fi</option>
        <option value="aventura">Aventura</option>
        <option value="juvenil">Juvenil</option>
      </select>
      <div class="input-group" style="max-width: 500px">
        <input type="text" class="form-control" placeholder="Busque um livro" style="max-height: 60px">
        <span class="input-group-text" style="max-height: 60px; max-width: 60px"><img src="@/components/icons/research.png" ></span>
      </div>
      <a class="navbar-brand" @click="goToCarrinho()"  style="height: 100%"><img class="img-navbar" src="@/components/icons/carrinho-carrinho.png" style="width:60px;height: 60px;padding: 10px;"> </a>
      <a class="navbar-brand" @click="goToLogin()"  style="height: 100%"><img class="img-navbar" src="@/components/icons/user.png"  style="width:60px;height: 60px;padding: 10px;"></a>
    </div>
  </nav>
</template>

<script>


export default ({
  setup() {
    
  },
   methods: {
     goToHome(){
      this.$router.push("/");
     },
    goToLogin() {
      this.$router.push("/login");
    },
    goToCarrinho() {
      this.$router.push("/carrinho");
    },
    goToBiblioteca() {
      this.$router.push("/biblioteca");
    },
   
  },
})
</script>

<style scoped>
img{
  width: 100%;
  height: 100%;
}
.navbar {
  z-index: 500000;
  justify-content: space-between;
  overflow: hidden;
  background-color: #F1F1F1 !important;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  display: flex;
  align-items: center;
  font-family: 'Grape Nuts', cursive;
  font-family: 'Open Sans', sans-serif;
}

/* Links inside the navbar */
.navbar a {
  float: left;
  display: block;
  color: #38B6FF;
  text-align: center;
  align-items: center;
  text-decoration: none;
  display: flex;
  font-size: 1vw;
  height: 11vh;
}

/* Change background on mouse-over */
.navbar a:hover {
  background: #ddd;
  color: #38B6FF;
}

.navbar-brand:hover{
  cursor: pointer;
}


#book-select{
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.05);
  width: 350px;
  height: 50px;
  border-radius: 8px;
  text-decoration: none;
  padding: 8px 12px;
  margin-left: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  cursor: pointer;
}


#input-container {
  position: relative;
  margin-left: 40px;
}

.research{
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.05);
  width: 350px;
  height: 30px;
  border-radius: 5px;
  text-decoration: none;
  padding: 8px 12px;
  margin-left: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  font-size: 1.5vw;
}

#input-container > img {
  position: absolute;
  top: 10px;
  left: 30px;
  width: 30px;

}

#input-container > input {
  padding-left: 40px;
}

.txt-navbar{
  font-size: xx-large;
}

.navigate a{
  margin:0  1em;
  padding: 1em 0;
}

.navigate-button a{
  text-decoration: none;
  color: black;
}

.navigate-button-number a{
  text-decoration: none;
}

/* Media query para deixar o site minimamente responsivo */
@media screen and (max-width: 1200px) {

  .research{
    width: 200px;
  }

  .img-navbar{
    width: 40px;
  }

  .txt-navbar{
    font-size: large;
  }
}


</style>