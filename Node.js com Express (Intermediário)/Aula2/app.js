const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Recurso Obtido', status: 200 });
});

app.post('/', (req, res) => {
  res.status(201).json({ message: 'Recurso Criado', status: 201 });
});

app.put('/', (req, res) => {
  res.status(200).json({ message: 'Recurso Atualizado', status: 200 });
});

app.delete('/', (req, res) => {
  res.status(200).json({ message: 'Recurso Excluído', status: 200 });
});

app.patch('/', (req, res) => {
  res.status(200).json({ message: 'Recurso Modificado Parcialmente', status: 200 });
});
