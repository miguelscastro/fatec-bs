package com.main;

import com.exercicio.Cliente;
import com.exercicio.Endereco;

public class exercMain {
    Endereco end = new Endereco("Rua Sen. Feijo", "Santos", Estado.SP);
    Cliente cli = new Cliente("teste", end, "teste@teste.com");
}
