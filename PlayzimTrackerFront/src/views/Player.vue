<script setup>
import Navbar from '../components/navbar.vue';
</script>

<template>
    <Navbar />
    <div class="listaplayers">
        <h2 class="titulolista">Jogadores adicionados</h2>
        <ul class="players-list">
            <li v-for="player in players" :key="player._id">
                <div class="player-item">
                    <div class="player-name">{{ player.nome }}</div>
                    <div class="player-email">{{ player.email }}</div>
                </div>
            </li>
        </ul>
    </div>
</template>


<style scoped>
.listaplayers {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the content vertically */
  background-color: rgb(31, 31, 31);
  width: 100%;
  height: 100%;
  padding-top: 7vw;
  letter-spacing: 0.2cap;
  position: absolute;
}


.players-list {
    list-style: none;
    padding: 0;
}

.player-item {
    background-color: white;
    border: 1px solid #ccc;
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.player-name {
    font-size: 18px;
    font-weight: bold;
}

.player-email {
    font-size: 14px;
    color: #555;
}

.titulolista {
    color: white;
    font-size: 30px;
    justify-content: center;
    display: flex;
    text-align: justify;
}

.lista {
    position: absolute;
    display: flex;
    align-content: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
</style>


<script>
export default {
    data() {
        return {
            players: [],
        };
    },
    async created() {
        await this.getPlayers();
    },
    methods: {
        async getPlayers() {
            try {
                const response = await fetch('http://localhost:3000/playzim/players');
                if (response.ok) {
                    const data = await response.json();
                    this.players = data;
                } else {
                    console.error('Failed to retrieve players.');
                }
            } catch (error) {
                console.error('An error occurred:', error);
            }
        },
    },
};
</script>


