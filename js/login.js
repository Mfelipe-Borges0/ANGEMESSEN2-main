const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2');
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'teste_angemessen',
});

connection.connect(function (err) {
  if (!err){
    console.log("Conexão como o Banco realizada com sucesso!!!");
  } else{
    console.log("Erro: Conexão NÃO realizada", err);
  }
});

app.get('/index', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
 
app.post('/login', (req, res) => {
  let email = req.body.email;
  let senha = req.body.senha;

  connection.query("SELECT * FROM usuario where email = '" + email +"'", function (err, rows) {
    if (!err){
      console.log("Resultado:",rows );
      
      if (senha === "Senha do banco" ){
        console.log('Senha OK');
      }else{
        console.log('Senha errada');
      }

    } else{
      console.log("Erro: Consulta não realizada", err);}
    });
    res.send('Mandou para o Servidor');
})
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000!')
})