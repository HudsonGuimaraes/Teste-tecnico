const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',  
  database: 'perfil_usuario'
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar no MySQL:', err);
  } else {
    console.log('Conectado ao banco MySQL!');
  }
});

app.get('/usuario', (req, res) => {
  db.query('SELECT * FROM usuarios WHERE id = 1', (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(result[0] || {});
    }
  });
});

app.post('/usuario', (req, res) => {
  const { imagem_perfil, nome_completo, idade, rua, bairro, estado, biografia } = req.body;

  const sql = `
    UPDATE usuarios 
    SET imagem_perfil = ?, nome_completo = ?, idade = ?, rua = ?, bairro = ?, estado = ?, biografia = ?
    WHERE id = 1
  `;

  const values = [imagem_perfil, nome_completo, idade, rua, bairro, estado, biografia];

  db.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ success: true, message: 'Dados atualizados com sucesso!' });
    }
  });
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
