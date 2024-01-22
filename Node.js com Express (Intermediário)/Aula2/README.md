## Exercícios da segunda aula ministrada pelo professor Pablo Juan do módulo Express Intermediário do curso Backend da Ada Tech em parceria com o iFood.

# README - Aula 2: Mergulhando no Express (Introdução) - CRUD e Métodos HTTP

## Descrição

Este repositório contém os arquivos e códigos desenvolvidos durante a Aula 2, que aborda o conceito de CRUD (Create, Retrieve, Update, Delete) e os métodos HTTP (GET, POST, PUT, DELETE). O conteúdo visa fornecer uma compreensão sólida desses conceitos essenciais para o desenvolvimento de aplicativos web utilizando o framework Express.

## Conteúdo

- **Aula2_1.pdf**: Documento com as atividades e conceitos abordados durante a aula.

## Conceitos Explorados

### CRUD (Create, Retrieve, Update, Delete)

O CRUD representa quatro operações básicas em sistemas de gerenciamento de banco de dados ou aplicações que lidam com dados. Cada operação é descrita a seguir:

1. **Create (C)**: Criar novos registros ou entidades no sistema. Verbo HTTP: POST.
2. **Retrieve (R)**: Recuperar, ler ou consultar dados existentes no sistema. Verbo HTTP: GET.
3. **Update (U)**: Modificar dados existentes no sistema. Verbo HTTP: PUT / PATCH.
4. **Delete (D)**: Remover registros ou entidades do sistema. Verbo HTTP: DELETE.

Essas operações são fundamentais para interações em sistemas de gerenciamento de dados, APIs e interfaces de usuário.

### Métodos HTTP

Os métodos HTTP representam ações que podem ser realizadas em recursos identificados por URLs. Alguns métodos comuns abordados:

1. **GET**: Solicita a recuperação de um recurso do servidor.
2. **POST**: Envia dados para processamento em um recurso identificado, geralmente usado para criar um novo recurso.
3. **PUT**: Substitui ou cria um recurso no servidor com os dados fornecidos.
4. **DELETE**: Remove um recurso identificado no servidor.
5. **PATCH**: Aplica modificações parciais a um recurso.

## Exercícios

- **Configuração da Aplicação**:
  - Faça o setup de uma nova aplicação.
  - Configure-a para detectar alterações e restartar automaticamente.

- **Implementação de Rotas CRUD**:
  - Implemente rotas CRUD (GET, POST, PUT, DELETE) que retornem mensagens correspondentes ao verbo chamado.
  - Exemplo: Na rota POST, retorne a mensagem em JSON "Recurso Criado" com o status code correto.

- **Testes**:
  - Teste as rotas CRUD em algum cliente HTTP.

## Execução

1. Clone o repositório: `git clone [URL do Repositório]`
2. Instale as dependências: `npm install`
3. Execute a aplicação: `npm start`

## Observações

Certifique-se de ter o Node.js e o npm instalados localmente para executar a aplicação.

Este projeto serve como um guia prático para entender e aplicar conceitos fundamentais no desenvolvimento de aplicações web. Qualquer dúvida ou sugestão, sinta-se à vontade para entrar em contato.

