const mongoose = require('mongoose');

const JogadorSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'Nome é obrigatório'],
    },
    email: {
        type: String,
        required: [true, 'Email é obrigatório'],
    },
    mao_favorita: {
        type: String,
        required: [true, 'Brawler favorito é obrigatório'],
    },
    foto: {
        data: Buffer,
        contentType: String,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Jogador', JogadorSchema);
