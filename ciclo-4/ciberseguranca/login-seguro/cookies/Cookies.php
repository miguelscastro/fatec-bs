<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tela Principal</title>
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
                    <a href="/phpSeguro/login/Login.php" id="login"><i id="user" class="fa-regular fa-circle-user"></i></a>
                </div>
            </div>
        </header>


        <div id="cookies">
            <p>Nós usamos cookies em nossos serviços. Ao utilizar este site você está ciente desta funcionalidade.</p>
            <button onclick="aceitarCookies()">Prosseguir</button>
        </div>
    </main>
    <script src="cookies.js"></script>

</body>

</html>