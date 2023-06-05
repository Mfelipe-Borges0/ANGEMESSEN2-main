const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: ''
});

connection.connect(function (err) {
  console.log("Conexão como o Banco realizada com sucesso!!!")
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.post('/login', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  connection.query("SELECT * FROM usuario where email = '" + username + "'" , function (err, rows, fields) {
    if (!err) {
      if (rows.length > 0) {
        
        if ( rows[0].password === password) {
            res.send('Login com Sucesso!!!');
            } else {
             res.send('Senha incorreta');
            }
        




        //let hashedPassword = rows[0].password;
        // bcrypt.compare(password, hashedPassword, function (err, result) {
        //   if (result) {
        //     res.send('Login com Sucesso!!!');
        //   } else {
        //     res.send('Senha incorreta');
        //   }
        // });



      } else {
        res.send('Login Falhou - Email não cadastrado');
      }
    } else {
      console.log("Erro: Consulta não realizada", err);
      res.send('Login failed');
    }
  });
});
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000!')
});


