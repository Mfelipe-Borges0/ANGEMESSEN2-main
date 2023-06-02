const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2');
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const app = require('path')
app.use('/assets', express.static('assets'))
app.use('/img', express.static('img'))
app.use('/public/pCSS', express.static('pCSS'))

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: ' ??? ', //<--- Banco de Dados
});

connection.connect(function (err) {
  if (!err){
    console.log("Conexão como o Banco realizada com sucesso!!!");
  } else{
    console.log("Erro: Conexão NÃO realizada", err);
  }
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pagina15.html')
})
 
app.post('/login', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  connection.query("SELECT * FROM usuario where email = '" + username +"'", function (err, rows) {
    if (!err){
      console.log("Resultado:",rows );
      
      if (password === "Senha do banco" ){
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