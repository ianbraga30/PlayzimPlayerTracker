<template>
    <div class="navbar-container">
        <div class="navbar">
            <div class="title">
                <h1>Playzim Player Tracker</h1>
            </div>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about">Sobre nós</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/Players">Sobre o Miles Morales</router-link>
                </li>
                <img src="../../imagens/find.png" width="40" height="40">
            </ul>
        </div>
    </div>
    
</template>

<style>
/* Import and apply the custom font to specific elements */
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

body {
    font-family: 'Roboto', sans-serif;
}

h1,
h2,
h3 {
    font-family: 'Roboto', sans-serif;
}

p {
    font-family: 'Roboto', sans-serif;
}

/* You can also define a class to apply the custom font */
.my-custom-font {
    font-family: 'Roboto', sans-serif;
}
</style>

<style scoped>
.menu {
    display: flex;
    justify-content: space-between; /* Add this to separate the "teste" elements */
    align-items: center;
    background-color: rgb(31, 31, 31);
    width: 100%;
    height: 100%;
    padding-top: 7vw;
    letter-spacing: 0.2cap;
}
.navbar-container {
    background-color: rgb(57, 57, 57);
    width: 100%;
    padding: 30px 0;
    /* Set the padding to create spacing around the navbar */
}

.navbar {
    height: 80px;
    color: transparent;
    width: 100%;
    /* Set the width to 100% */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
    /* Adjust the horizontal padding */
    font-size: 20px;
}
.botao{
    display: flex;
    text-align: center;
    justify-content: center;
    padding: 8px 20px;
    background: linear-gradient(315deg, #00ccff, #d400d4);
    border-radius: 20px;
    margin-top: 30px;
    text-decoration: none;
    color: #fff;
    width: 200px;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    transition: 0.5s;
  }

.logo {
    margin-left: 20px;
}

.title {
    margin-right: 20px;
    z-index: 999;
    color: antiquewhite;
}

.navbar-nav {
    margin-right: 10vh;
    list-style: none;
    padding: 0;
    display: flex;
}

.nav-item {
    margin-right: 20px;
}

.router-link-exact-active {
    font-weight: bold;
}

/* Stylish positioning adjustments */
.logo img {
    width: 100px;
    height: auto;
}

.navbar-nav {
    display: flex;
    align-items: center;
    padding-right: 50px;
}

.navbar-nav router-link {
    margin-right: 20px;
}

.nav-item:last-child {
    margin-right: 0;
}
</style>
