<?php
class Condominio {
    private $nomeCondominio, $proprietario;

public function set_atributos($nomeCondominio, $proprietario) {
    $this->nomeCondominio = $nomeCondominio;
    $this->proprietario = $proprietario;
}
public function get_atributos() {
    return [
        'Nome Condomínio' => $this->nomeCondominio,
        'Proprietário' => $this->proprietario
    ];
}
}
?>