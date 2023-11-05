const { Router } = require('express');
const Jogador = require('../../models/jogadores');
const router = Router();
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.use((req, res, next) => {
    console.log('Iniciando o procedimento de adição de jogadores');
    next();
});

// Route to get all players
router.get('/players', async (req, res) => {
    try {
        const players = await Jogador.find();
        res.status(200).json(players);
    } catch (err) {
        res.status(500).send({ error: 'Falha ao buscar jogadores' });
    }
});

router.get('', (req, res) => {
    res.send('Tela inicial, aqui será a adição de jogadores (:');
});

router.post('/players', async (req, res) => {
    try {
        const userDB = await Jogador.findOne({ $or: [{ nome: req.body.nome }, { email: req.body.email }] });
        if (userDB) {
            return res.status(400).send({ msg: 'Jogador já existe' });
        } else {
            const novojogador = new Jogador({
                nome: req.body.nome,
                email: req.body.email,
                mao_favorita: req.body.mao_favorita,
                foto: {
                    data: req.body.foto.data,
                    contentType: req.body.foto.contentType,
                },
            });
            await novojogador.save();
            res.status(201).json(novojogador);
        }
    } catch (err) {
        return res.status(400).send({ error: 'Falha ao registrar jogador' });
    }
});

router.delete('/players/:id', async (req, res) => {
    try {
        const jogador = await Jogador.findByIdAndDelete(req.params.id);
        if (!jogador) {
            res.status(404).send('Jogador não encontrado');
        } else {
            res.status(200).send('Jogador deletado com sucesso');
        }
    } catch (err) {
        res.status(500).send({ error: 'Falha ao deletar jogador' });
    }
});

router.put('/players/:id', async (req, res) => {
    try {
        const jogador = await Jogador.findByIdAndUpdate(req.params.id, {
        nome: req.body.nome,
        email: req.body.email,
        mao_favorita: req.body.mao_favorita,
        foto: {
            data: req.body.foto.data,
            contentType: req.body.foto.contentType,
        },
        });
            if (!jogador) {
                res.status(404).send('Jogador não encontrado');
            } else {
                res.status(200).send('Jogador atualizado com sucesso');
            }
        } catch (err) {
            res.status(500).send({ error: 'Falha ao atualizar jogador' });
        }
});

module.exports = router;



