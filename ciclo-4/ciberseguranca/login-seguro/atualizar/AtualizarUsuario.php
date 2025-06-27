<?php
session_start(); // Iniciar a sessão

// Verificar se o usuário está logado
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header("Location: login.html"); // Redirecionar para a página de login
    exit();
}

// Conectar ao banco de dados
$conn = new mysqli("localhost", "root", "root", "seguranca");
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Obter dados do formulário
$id = $_POST['id'];
$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = password_hash($_POST['senha'], PASSWORD_DEFAULT); // Criptografar a nova senha

// Atualizar dados do usuário
$sql = "UPDATE Usuarios SET nome='$nome', email='$email', senha='$senha' WHERE id='$id'";

if ($conn->query($sql) === TRUE) {
    header("Location: /phpSeguro/Perfil.php"); // Redirecionar para consulta.php
    exit();
} else {
    echo "Erro ao atualizar usuário: " . $conn->error;
}

$conn->close();
