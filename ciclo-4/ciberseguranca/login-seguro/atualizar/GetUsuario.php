<?php
// Conectar ao banco de dados
$conn = new mysqli("localhost", "root", "root", "seguranca");
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

$id = $_GET['id'];

// Selecionar dados do usuário pelo ID
$sql = "SELECT id, nome, email, senha FROM Usuarios WHERE id='$id'";
$result = $conn->query($sql);

$usuario = null;
if ($result->num_rows > 0) {
    $usuario = $result->fetch_assoc();
} else {
    echo "Usuário não encontrado.";
    exit();
}
$conn->close();
