package com.exercicio;

public class Cliente {
    private Endereco endereco;
    private String nome, email;

    public Cliente(String nome, Endereco endereco, String email) {
        this.nome = nome;
        this.endereco = endereco;
        this.email = email;
    }

    public void mostrar(){
        System.out.println(nome);
        System.out.println(email);
        endereco.mostrar();
    }
    public boolean isClienteValido(){
        return nome != " ";
    }
}
