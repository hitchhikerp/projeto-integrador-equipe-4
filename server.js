const express = require('express');
const mysql = require('mysql');
const app = express();

// Configurações para a conexão com o banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '369258147',
    database: 'contratar',
});

// Conectar ao banco de dados
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        throw err;
    }
    console.log('Conectado ao banco de dados MySQL');
});

// Configuração do corpo da solicitação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota para lidar com o envio do formulário
app.post('/enviar-dados', (req, res) => {
    const { nome, cpf, telcontato, email, cep, numerocasa, logradouro, bairro, localidade, uf, plan, time } = req.body;


    // Insira os dados no banco de dados
    const query = 'INSERT INTO tabela_de_dados (nome, cpf, telcontato, email, cep, numerocasa, logradouro, bairro, localidade, uf, plan, time ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [nome, cpf, telcontato, email, cep, numerocasa, logradouro, bairro, localidade, uf, plan, time], (err, result) => {
        if (err) {
            console.error('Erro ao inserir dados no banco de dados:', err);
            res.status(500).send('Erro ao inserir dados no banco de dados');
        } else {
            console.log('Dados inseridos com sucesso');
            res.status(200).send('Dados inseridos com sucesso');
        }
    });
});

// Inicie o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});
