const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('Olá, este é o meu servidor web com Express!');
});

app.get('/api', (req, res) => {
  res.json({ mensagem: 'Esta é uma resposta da API com Express.' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});
