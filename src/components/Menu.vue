<template>
  <!--
  <div class="navbar">
    <a href="#home"><img class="img-navbar" src="@/components/icons/logo.png" width="60px" style="padding: 10px;"></a>

    <a href="#home"><img class="img-navbar" src="@/components/icons/livro.png" width="60px" style="padding: 10px;"><p class="txt-navbar" >Biblioteca</p></a>


    <select name="livros" id="book-select" style=" margin-left: 80px; ">
      <option value="" disabled selected hidden>Selecione a categoria</option>
      <option value="romance">Romance</option>
      <option value="scifi">Sci-Fi</option>
      <option value="aventura">Aventura</option>
      <option value="juvenil">Juvenil</option>
    </select>

    <div id="input-container" style="margin-right: auto; margin-left: auto;">
      <img src="@/components/icons/research.png">
      <input class="research">
    </div>


    <a href="#home"><img class="img-navbar" src="@/components/icons/carrinho-carrinho.png" width="60px" style="padding: 10px;"> </a>
    <a href="#home"><img class="img-navbar" src="@/components/icons/user.png" width="60px" style="padding: 10px;"></a>
  </div>

  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>


        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>

            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
  -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>


export default {
  name: "Menu"
}
</script>

<style scoped>
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