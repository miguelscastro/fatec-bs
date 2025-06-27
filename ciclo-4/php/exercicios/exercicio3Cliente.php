<?php
include_once "exercicio3.php";
$AlemMar = new Padaria;

$AlemMar->set_atributos("Rua das Flores", "Cauã", "06:00", 12);

print_r($AlemMar->get_atributos());
?>