## Exercícios da primeira aula ministrada pelo professor Pablo Juan do módulo Express Intermediário do curso Backend da Ada Tech em parceria com o iFood.  

# Como implementar e executar um servidor web simples usando Node.js sem o uso de  
frameworks. Vamos criar um servidor básico que responde a requisições HTTP.  
Primeiro, certifique-se de ter o Node.js instalado no seu sistema. Se não tiver, você  
pode baixá-lo em https://nodejs.org/.  
Aqui está um exemplo mínimo de um servidor web usando Node.js:  
  
1. Crie um novo arquivo chamado server.js :  
// Importa o módulo HTTP do Node.js  
const http = require('http');  
// Configura as informações do servidor  
const host = '127.0.0.1';  
const port = 3000;  
// Cria o servidor  
const server = http.createServer((req, res) => {  
// Configura o cabeçalho de resposta com o tipo de conteúdo  
res.writeHead(200, {'Content-Type': 'text/plain'});  
// Envia a resposta para o cliente  
res.end('Olá, este é o meu servidor web!\n');  
});  
// Faz o servidor escutar em uma porta específica e endereço IP  
server.listen(port, host, () => {  
console.log(`Servidor rodando em http://${host}:${port}/`);  
});  
  
  
2. Salve o arquivo server.js e abra um terminal.  
  
3. Navegue até o diretório onde o arquivo está localizado e execute o seguinte
comando:  
node server.js  
Isso iniciará o servidor e você verá a mensagem Servidor rodando em  
http://127.0.0.1:3000/ .  
Agora, seu servidor está esperando por requisições HTTP na porta 3000. Quando você  
abrir um navegador e acessar http://127.0.0.1:3000/ , verá a mensagem "Olá, este é o  
meu servidor web!".  
Este é um exemplo muito simples, mas você pode expandir e aprimorar conforme necessário. Se quiser lidar com diferentes rotas, métodos HTTP, ou adicionar outros recursos, você pode começar a explorar bibliotecas ou frameworks como Express.js.  
  
4. Pesquisar sobre headers  

https://developer.mozilla.org/en-US/docs/Web/API/Headers  
    
5. Pesquisar sobre qual formato de dados é trafegado por uma API.  

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON  
  
6. Configurar servidor criado para que trabalhe com o formato de API  

serverAPI.js
  
7. Instalar express e replicar configuração de servidor criado com nodejs puro nele.  

serverExpress.js