<?php
include_once "exercicio2.php";
$condominio = new Condominio;

$condominio->set_atributos("CauCarvalho", "Cauã");

print_r($condominio->get_atributos());
?>