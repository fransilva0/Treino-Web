const express = require('express');
const app = express();
const AnimeController = require('./controllers/animeController');

app.use(express.json());

app.get('/animes', AnimeController.getAllAnimes.bind(AnimeController));
app.get('/animes/:id', AnimeController.getAnimeById.bind(AnimeController));
app.post('/animes', AnimeController.createAnime.bind(AnimeController));
app.put('/animes/:id', AnimeController.updateAnime.bind(AnimeController));
app.delete('/animes/:id', AnimeController.deleteAnime.bind(AnimeController));

app.listen(3333, () => console.log('Servidor rodando na porta 3333'));
