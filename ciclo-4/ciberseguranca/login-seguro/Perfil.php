<?php
session_start(); // Iniciar a sessão

// Verificar se o usuário está logado
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header("Location: /phpSeguro/login/Login.php"); // Redirecionar para a página de login
    exit();
}

if (!isset($_COOKIE['cookies'])) {
    header("Location: /phpSeguro/cookies/Cookies.php");
    exit();
}

// Verificar o papel do usuário
$role = $_SESSION['role'];
$username = $_SESSION['username'];

// Conectar ao banco de dados
$conn = new mysqli("localhost", "root", "root", "seguranca");
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Se for usuário, obter suas informações
if ($role === 'user') {
    $userid = $_SESSION['userid'];
    $sql = "SELECT id, nome, email, senha, role FROM Usuarios WHERE id='$userid'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $usuario = $result->fetch_assoc();
    } else {
        echo "Usuário não encontrado.";
        exit();
    }
}

$conn->close();
include 'GetUsuarios.php';
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tela de Perfil</title>
    <link rel="stylesheet" href="/phpSeguro/index.css">
    <script src="https://kit.fontawesome.com/20918d4472.js" crossorigin="anonymous"></script>
</head>

<body>
    <main id="main">
        <header>
            <h1>Login Seguro</h1>

            <div id="pesquisarEntrar">
                <div id="pesquisar">
                    <label for="pesquisa"><i class="fa-solid fa-magnifying-glass"></i></label>
                    <input type="text" name="pesquisa" value="" id="pesquisa">
                    <button id="enviarPesquisa"><i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <div id="entrar">
                    <a href="/phpSeguro/DeslogarUsuario.php" id="login"><i id="user" class="fa-regular fa-circle-user"></i>
                        <?php echo htmlspecialchars($username); ?>
                    </a>
                </div>
            </div>
        </header>

        <?php if ($role === 'admin'): ?>
            <div id="newAdm">
                <h2>Administrador</h2>
                <a href="/phpSeguro/controle/Controle.php">Cadastrar novo Administrador</a>
            </div>
            <table id="tabelaUsuarios">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th>Email</th>
                        <th>Senha</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($usuarios as $usuario): ?>
                        <tr>
                            <td><?php echo htmlspecialchars($usuario['id']); ?></td>
                            <td><?php echo htmlspecialchars($usuario['nome']); ?></td>
                            <td><?php echo htmlspecialchars($usuario['role']); ?></td>
                            <td><?php echo htmlspecialchars($usuario['email']); ?></td>
                            <td class="pwd"><?php echo htmlspecialchars($usuario['senha']); ?></td>
                            <td>
                                <a href="/phpSeguro/atualizar/Atualizar.php?id=<?php echo htmlspecialchars($usuario['id']); ?>">Atualizar</a>
                                <a href="/phpSeguro/DeletarUsuario.php?id=<?php echo htmlspecialchars($usuario['id']); ?>">Deletar</a>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>


        <?php elseif ($role === 'user'): ?>
            <div>
                <div id="dados">
                    <h2>Suas Informações</h2>
                    <p>Nome: <?php echo htmlspecialchars($usuario['nome']); ?></p>
                    <p>Email: <?php echo htmlspecialchars($usuario['email']); ?></p>
                    <p>Senha: <?php echo htmlspecialchars($usuario['senha']); ?></p>
                </div>
                <div id="recuperarSenha">
                    <h3>Esqueceu sua senha?</h3>
                    <a href="/phpSeguro/atualizar/Atualizar.php?id=<?php echo htmlspecialchars($usuario['id']); ?>">Alterar dados</a>
                </div>
                <div id="excluirConta">
                    <h3>Deseja excluir sua conta?</h3>
                    <a href="/phpSeguro/DeletarUsuario.php?id=<?php echo htmlspecialchars($usuario['id']); ?>">Excluir conta</a>
                </div>
            </div>
        <?php endif; ?>

    </main>
</body>

</html>