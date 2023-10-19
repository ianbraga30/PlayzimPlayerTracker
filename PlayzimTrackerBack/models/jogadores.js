const mongoose = require('mongoose');

const JogadorSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, "Nome é obrigatório"]
    },
    email: {
        type: String,
        required: [true, "Email é obrigatório"]
    },
    brawlerfavorito: {
        type: String,
        required: [true, "Brawler favorito é obrigatório"]
    },
},
{
    timestamps: true,
});

const Jogador = mongoose.models.Jogador || mongoose.model('Jogador', JogadorSchema);