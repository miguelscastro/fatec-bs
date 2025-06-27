<?php
session_start();
session_unset();
session_destroy();
setcookie("userid", "", time() - 3600, "/"); // Expira o cookie
header("Location: /phpSeguro/index.php");
