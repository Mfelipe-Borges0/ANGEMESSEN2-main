<?php

include 'conexao.php';

session_start();

//verifica o formulario da tela de login
//if($_SERVER["REQUEST_METHOD"] === 'post'){
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $sql = "SELECT * FROM usuario WHERE email = ? AND senha = ?";
    $stmt = $conexao->prepare($sql);
    $stmt->bind_param('ss', $email,$senha);
    $stmt->execute();
    $resultado = $stmt->get_result();

    if($resultado->num_rows === 1){
        //login efetuado com sucesso.
        $_SESSION['email'] = $email;
        header("Location: ../pHTML/index.html");
        exit();
    } else {
        echo "credenciais invalidas. Verifique seu email e senha.";
    }

//}
$conexao->close();

?>

