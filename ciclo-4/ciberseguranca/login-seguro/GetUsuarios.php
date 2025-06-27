<?php
// Conectar ao banco de dados
$conn = new mysqli("localhost", "root", "root", "seguranca");
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Selecionar todos os usuários
$sql = "SELECT id, nome, email, senha, role FROM Usuarios";
$result = $conn->query($sql);

$usuarios = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $usuarios[] = $row;
    }
} else {
    echo "Nenhum usuário encontrado.";
}

$conn->close();
