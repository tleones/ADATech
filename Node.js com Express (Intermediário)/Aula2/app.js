const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.get('/', (req, res) => {
  res.json({ message: 'Recurso Obtido' });
});

app.post('/', (req, res) => {
  res.json({ message: 'Recurso Criado' });
});

app.put('/', (req, res) => {
  res.json({ message: 'Recurso Atualizado' });
});

app.delete('/', (req, res) => {
  res.json({ message: 'Recurso Excluído' });
});

app.patch('/', (req, res) => {
    res.json({ message: 'Recurso Modificado Parcialmente' });
});
  