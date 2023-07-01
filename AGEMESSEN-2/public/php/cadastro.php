<?php
// Conexão com o banco de dados (substitua os valores pelas suas configurações)
$host = 'localhost';
$usuario = 'root';
$senha = 'root';
$banco = 'angemessen';

include 'conexao.php';

session_start();

// Obter dados do formulário
$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = $_POST['senha'];
$senha2 = $_POST['senha2'];

// Verificar se as senhas coincidem
if ($senha !== $senha2) {
    die('As senhas não coincidem.');
}

// Hash da senha
$hash_senha = password_hash($senha, PASSWORD_DEFAULT);

// Inserir dados no banco de dados
$query = "INSERT INTO usuario (nome, email, senha) VALUES ('$nome', '$email', '$hash_senha')";
$resultado = mysqli_query($conexao, $query);

if ($resultado) {
    echo 'Usuário cadastrado com sucesso.';
} else {
    echo 'Erro ao cadastrar o usuário: ' . mysqli_error($conexao);
}

// Fechar a conexão com o banco de dados
mysqli_close($conexao);
?>


?>