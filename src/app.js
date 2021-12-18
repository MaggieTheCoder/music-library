const express = require('express');
const artistRouter = require('./routes/artist.js');

const app = express();

app.use(express.json());

app.use('/artist', artistRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my Music Library app');
});

module.exports = app;
