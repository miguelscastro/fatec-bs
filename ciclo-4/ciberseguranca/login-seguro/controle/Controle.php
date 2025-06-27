<?php
session_start(); // Iniciar a sessão

// Conectar ao banco de dados
$conn = new mysqli("localhost", "root", "root", "seguranca");
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

if (!isset($_COOKIE['cookies'])) {
    header("Location: /phpSeguro/cookies/Cookies.php");
    exit();
}

// SQL para criar a tabela de usuários se não existir
$sql = "CREATE TABLE IF NOT EXISTS Usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

if ($conn->query($sql) !== TRUE) {
    $_SESSION['error_message'] = "Erro ao criar tabela: " . $conn->error;
    header("Location: inserir_admin.php");
    exit();
}

// Verificar se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obter dados do formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];
    $role = 'admin';

    // Hash da senha
    $senhaHash = password_hash($senha, PASSWORD_DEFAULT);

    // SQL para inserir um novo administrador
    $sql = "INSERT INTO Usuarios (nome, email, senha, role) VALUES ('$nome', '$email', '$senhaHash', '$role')";

    if ($conn->query($sql) === TRUE) {
        $_SESSION['success_message'] = "Administrador inserido com sucesso.";
    } else {
        $_SESSION['error_message'] = "Erro ao inserir administrador: " . $conn->error;
    }
    header("Location: /phpSeguro/Perfil.php");
    exit();
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inserir Novo Administrador</title>
    <link rel="stylesheet" href="controle.css">
</head>

<body>
    <div class="container">
        <header>
            <h1>Inserir Novo Administrador</h1>
        </header>

        <?php
        if (isset($_SESSION['error_message'])) {
            echo "<p class='error'>" . htmlspecialchars($_SESSION['error_message']) . "</p>";
            unset($_SESSION['error_message']); // Limpar mensagem de erro após exibir
        }
        if (isset($_SESSION['success_message'])) {
            echo "<p class='success'>" . htmlspecialchars($_SESSION['success_message']) . "</p>";
            unset($_SESSION['success_message']); // Limpar mensagem de sucesso após exibir
        }
        ?>

        <form action="Controle.php" method="post">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <label for="senha">Senha:</label>
            <input type="password" id="senha" name="senha" required>
            <button type="submit">Inserir Administrador</button>
        </form>
    </div>
</body>

</html>