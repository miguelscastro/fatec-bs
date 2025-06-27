<?php
$cidade = array(
    'Santos' => array(
        'estado' => 'SP',
        'país' => 'Brasil',
        'região' => 'Sudeste'
    ),
    'São Borja' => array(
        'estado' => 'RS',
        'país' => 'Brasil',
        'região' => 'Sul'
    )
);
print_r ($cidade['Santos']['estado']. "\n");
print_r ($cidade['Santos']['país']. "\n");
print_r ($cidade['Santos']['região']. "\n");
?>