<?php
class Padaria {
    private $endereco, $donoPadaria, $horarioAbertura, $enderecoNumero;

public function set_atributos($endereco, $donoPadaria, $horarioAbertura, $enderecoNumero) {
    $this->endereco = $endereco;
    $this->donoPadaria = $donoPadaria;
    $this->horarioAbertura = $horarioAbertura;
    $this->enderecoNumero = $enderecoNumero;
}
public function get_atributos() {
    return [
        'Endereço' => $this->endereco,
        'Número da padaria' => $this->enderecoNumero,
        'Dono da padaria' => $this->donoPadaria,
        'Horário de abertura' => $this->horarioAbertura
    ];
}
}
?>