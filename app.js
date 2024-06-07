const express = require('express');
const app = express();
const port = 3030;

//Rota principal para a página inicial
app.get('/', (req, res) => {
    //envie uma página html como resposta
    res.send('<html><body><h1>Página Inicial</h1></body></html>');
});

//Rota GET para o CRUD de usuários
app.get('/users', (req, res) => {
    //implementar a lógica para buscar usuários
    res.send('Lista de Usuários');
});

//Implementar rotas de criar, atualizar e excluir usuário
app.post('/users', (req, res) =>{
    //implementar a lógica para cadastrar usuário
});

app.put('/users/:id', (req, res) => {
    //implementar a lógica para atualizar usuário
});

app.delete('users/:id', (req, res) => {

});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

//CRUD em memória
let users =[{
    "id": 1,
    "name": "Teste",
    "email": "teste@email.com",
    "age":28,
    "gender": "male"
}];

