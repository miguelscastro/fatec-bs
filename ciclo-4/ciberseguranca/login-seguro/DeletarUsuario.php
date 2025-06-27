<?php
session_start(); // Iniciar a sessão

if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header("Location: /phpSeguro/login/Login.php"); // Redirecionar para a página de login
    exit();
}

// Conectar ao banco de dados
$conn = new mysqli("localhost", "root", "root", "seguranca");
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $id = $_GET['id'];

    $sql = "DELETE FROM Usuarios WHERE id='$id'";

    if ($conn->query($sql) === TRUE) {
        header("Location: /phpSeguro/Perfil.php");
        exit();
    } else {
        echo "Erro ao deletar usuário: " . $conn->error;
    }

    $conn->close();
}
