const http = require('http');
const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/api') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({ mensagem: 'Esta é uma resposta da API.' }));
  } else {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Olá, este é o meu servidor web!\n');
  }
});

server.listen(port, host, () => {
  console.log(`Servidor rodando em http://${host}:${port}/`);
});
