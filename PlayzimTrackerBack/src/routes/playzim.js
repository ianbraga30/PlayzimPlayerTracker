const { Router } = require('express');
const mongoose = require('mongoose');
const Jogadores = require('../../models/jogadores');

const router = Router();

router.use((req, res, next) => {
    console.log(`Iniciando o procedimento de adição de jogadores`);
    next();
});

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


router.get('', (req, res) => {
    res.send('Tela inicial, aqui será a adição de jogadores (:');
});

router.get('/players', (req, res) => {
    res.send('Tela inicial, aqui será a página de preenchimento de jogadores (:');
});

router.post('/players', async (req, res) => {
    try {
        const jogador = await Jogador.create(req.body);
        res.status(201).json(jogador);
    } catch (err) {
        return res.status(400).send({ error: 'Falha ao registrar jogadorr' });
    }
});
module.exports = router;

