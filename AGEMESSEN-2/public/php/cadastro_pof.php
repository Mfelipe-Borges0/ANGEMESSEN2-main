<?php
include 'conexao.php';

session_start();

//verifica o formulario da tela de login
//if($_SERVER["REQUEST_METHOD"] === 'post'){
    $nome = $_POST["nome"];
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $sql = "INSERT INTO usuario (nome, email, senha) VALUES (?,?,?)";
    $stmt = $conexao->prepare($sql);
    $stmt->bind_param('sss', $nome,$email,$senha);

   if($stmt->execute()){
    echo "Usuario cadastrado com sucesso!";
   } else {
    echo"Erro ao cadastrar usuario: ".$stmt->error;
   }

//}
$conexao->close();
?>