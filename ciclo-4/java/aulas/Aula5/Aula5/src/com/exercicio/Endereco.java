package com.exercicio;

public class Endereco {
    private String logradouro, cidade;
    private Estado estado;

    public Endereco(String logradouro, String cidade, Estado estado) {
        this.logradouro = logradouro;
        this.cidade = cidade;
        this.estado = estado;
    }

    public void mostrar() {
        System.out.println(logradouro);
        System.out.println(cidade);
        System.out.println(estado);
    }

    
}
