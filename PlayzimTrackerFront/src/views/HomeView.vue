<script setup>
import Navbar from '../components/Navbar.vue';
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;
console.log(`Viewport Width: ${viewportWidth}px`);
console.log(`Viewport Height: ${viewportHeight}px`);
const toPlayers = () => {
  router.push('/players');
};
</script>

<template>
  <div class="homebox">
    <div class="background"></div>
    <Navbar></Navbar>
    <div class="menu">
          <div>
              <img src="../../imagens/photo-removebg-preview.png" width="550" height="550">
          </div>
          <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odit eius hic eos labore dignissimos aspernatur quos. Voluptates doloremque, a nesciunt eius, magni voluptatum amet enim deleniti reprehenderit omnis corrupti?
              <router-link class="botao" to="/Players">Adicionar player</router-link>
          </div>
      </div>
  </div>
</template>

<style scoped>
.menu {
    display: flex;
    justify-content: space-between; /* Add this to separate the "teste" elements */
    align-items: center;
    background-color: transparent;
    width: 100%;
    height: 100%;
    padding-top: 7vw;
    letter-spacing: 0.2cap;
}

.background {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(31, 31, 31);
  z-index: -1;
  background-repeat: no-repeat;
  background-image: url(../../imagens/19.jpg);
}
.homebox {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  .botao:hover{
    background: linear-gradient(315deg, #00ccff, #d400d4);
    transform: scale(1.05);
    transition: 0.5s;
  }


</style>
