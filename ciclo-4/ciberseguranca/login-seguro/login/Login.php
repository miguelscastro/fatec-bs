<?php
session_start(); // Iniciar a sessão

// Limpar mensagem de erro anterior
unset($_SESSION['error_message']);

if (!isset($_COOKIE['cookies'])) {
    header("Location: /phpSeguro/cookies/Cookies.php");
    exit();
}

// Conectar ao banco de dados
$conn = new mysqli("localhost", "root", "root", "seguranca");
if ($conn->connect_error) {
    $_SESSION['error_message'] = "Conexão falhou: " . $conn->connect_error;
    header("Location: /phpSeguro/login/Login.php");
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    // Verificar usuário e senha
    $sql = "SELECT id, nome, senha, role FROM Usuarios WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($senha, $user['senha'])) {
            // Senha correta, definir variáveis de sessão
            $_SESSION['userid'] = $user['id'];
            $_SESSION['username'] = $user['nome'];
            $_SESSION['role'] = $user['role'];
            $_SESSION['loggedin'] = true;
            header("Location: /phpSeguro/Perfil.php");

            exit();
        } else {
            $_SESSION['error_message'] = "Senha incorreta.";
            header("Location: login.php");
            exit();
        }
    } else {
        $_SESSION['error_message'] = "Usuário não encontrado.";
        header("Location: /phpSeguro/login/Login.php");
        exit();
    }
}
$conn->close();
?>


<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tela Login</title>
    <link rel="stylesheet" href="login.css">
    <script src="https://kit.fontawesome.com/20918d4472.js" crossorigin="anonymous"></script>
</head>

<body>
    <a href="/phpSeguro/index.php">
        <svg id="caminhoPrincipal" width="61" height="64" viewBox="0 0 61 64" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M32.1281 0.670203C31.9104 0.457758 31.6518 0.289206 31.367 0.174202C31.0823 0.0591975 30.777 0 30.4688 0C30.1605 0 29.8552 0.0591975 29.5705 0.174202C29.2857 0.289206 29.0271 0.457758 28.8094 0.670203L0.684379 28.0452C0.46687 28.2574 0.294473 28.5093 0.177043 28.7865C0.0596131 29.0636 -0.000546326 29.3605 3.73826e-06 29.6603V61.5978C3.73826e-06 62.2029 0.246934 62.7831 0.686472 63.2109C1.12601 63.6387 1.72215 63.8791 2.34375 63.8791H23.4375C24.0591 63.8791 24.6552 63.6387 25.0948 63.2109C25.5343 62.7831 25.7813 62.2029 25.7813 61.5978V43.3478H35.1563V61.5978C35.1563 62.2029 35.4032 62.7831 35.8427 63.2109C36.2823 63.6387 36.8784 63.8791 37.5 63.8791H58.5938C59.2154 63.8791 59.8115 63.6387 60.251 63.2109C60.6906 62.7831 60.9375 62.2029 60.9375 61.5978V29.6603C60.9381 29.3605 60.8779 29.0636 60.7605 28.7865C60.643 28.5093 60.4706 28.2574 60.2531 28.0452L53.9063 21.8721V6.84783C53.9063 6.2428 53.6593 5.66256 53.2198 5.23474C52.7803 4.80692 52.1841 4.56658 51.5625 4.56658H46.875C46.2534 4.56658 45.6573 4.80692 45.2177 5.23474C44.7782 5.66256 44.5313 6.2428 44.5313 6.84783V12.7471L32.1281 0.670203ZM4.6875 59.3166V30.6048L30.4688 5.51102L56.25 30.6048V59.3166H39.8438V41.0666C39.8438 40.4616 39.5968 39.8813 39.1573 39.4535C38.7178 39.0257 38.1216 38.7853 37.5 38.7853H23.4375C22.8159 38.7853 22.2198 39.0257 21.7802 39.4535C21.3407 39.8813 21.0938 40.4616 21.0938 41.0666V59.3166H4.6875Z"
                fill="black" />
        </svg>
    </a>

    <main id="main">
        <h1>Acesso seguro</h1>
        <?php
        if (isset($_SESSION['error_message'])) {
            echo "<p class='error'>" . htmlspecialchars($_SESSION['error_message']) . "</p>";
            unset($_SESSION['error_message']);
        }
        ?>
        <form id="login" action="Login.php" method="post">
            <div>
                <label for="email">Email</label>
                <input type="email" id="email" name="email">
            </div>

            <div>
                <label for="senha">Senha</label>
                <input type="password" id="senha" name="senha">
            </div>

            <button>Entrar</button>
        </form>

        <a href="/phpSeguro/cadastro/cadastro.php">Clique aqui para criar um novo usuário</a>
    </main>
</body>