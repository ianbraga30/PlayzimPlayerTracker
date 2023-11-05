<template>
    <nav class="navbar">
        <div class="logo">
            <img src="../../imagens/photo-removebg-preview.png" width="100" height="100">
        </div>
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
    </nav>
</template>

<style scoped>
.navbar {
    background-color: rgb(57, 57, 57);
    height: 80px;
    /* Adjust the height */
    margin: 0px 55px 55px;
    position: fixed;
    color: transparent;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    /* Logo on the left, menu on the right */
    align-items: center;
    padding: 0 20px;
    /* Adjust the padding */
    font-size: 20px;
    /* Adjust the font size */
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
    list-style: none;
    padding: 0;
    display: flex;
}

.nav-item {
    margin-right: 20px;
}

.router-link-exact-active {
    font-weight: bold;
}</style>
