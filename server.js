const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

let db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

db.run('CREATE TABLE cachorro (nome_pet TEXT, nome_dono TEXT, idade_cachorro INTEGER, vacinado BOOLEAN)');

app.post('/cadastrar-cachorro', (req, res) => {
  const { nomePet, nomeDono, idadeCachorro, vacinado } = req.body;
  db.run('INSERT INTO cachorro (nome_pet, nome_dono, idade_cachorro, vacinado) VALUES (?, ?, ?, ?)', [nomePet, nomeDono, idadeCachorro, vacinado], function(err) {
    if (err) {
      return console.error(err.message);
    }
    res.send({ message: 'Cachorro cadastrado com sucesso!' });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
