# RESTFUL_API
API RESTful for to-do list management.

Requisitos: NodeJs, Postgres instalados.

Passos:
Clonar o repositório em uma pasta.
No terminal:
nmp int -y // cria arquivos json.
npm i --save express // instala express.
nmp i pg // conexão para o banco de dados.

Na pasta src/tasks tem-se as rotas definidas pelo controlador e as "queiries" para as consultas no banco de dados. 
Em server.js se tem o servidor express. Em db.js tem-se os dados para a conexão com o bando de dados.

Para rodar o servidor, no terminal: node ./server.js

Postgres:
Foi criada um database chamada de tasks e uma tabela com o mesmo nome.

CREATE DATABASE tasks;

\c tasks

CREATE TABLE tasks (
id integer PRIMARY KEY,
title VARCHAR(255),
created_at timestamp NOT NULL DEFAULT NOW(),
completed_at timestamp);

//Exemplo de dados inseridos.
INSERT INTO tasks (id, title)
VALUES (1, 'buy milk'), (2, 'go to the gym'),(3, 'study python');

Usando Postman é possível fazer todas as operações definidas nas rotas.

Usando como endpoint 'localhost:3000/tasks/'.

GET 'localhost:3000/tasks/' -> retorna a lista de tarefas.
GET 'localhost:3000/tasks/{id}' -> retorna uma tarefa especifica.

POST 'localhost:3000/tasks/' com um arquivo Json como no body adiciona uma tarefa ao banco.

Exemplo:
{
    "id": 4,
    "title": "repair iphone"
}

PUT 'localhost:3000/tasks/{id}' atualiza uma tarefa com a data de conclusão em completed_at, deve se inserir um timestamp.
Exemplo:
{
"created_at": "2023-03-31T11:23"
}

DELETE 'localhost:3000/tasks/{id}' deleta uma tarefa passando seu id.





