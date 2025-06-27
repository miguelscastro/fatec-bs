package com.aula8;

public class Cliente {

    private int id; 
    private String nome, cpf;

    //ASS => nome: Cliente, LP: [String,String]
    public Cliente(String nome, String cpf){
        this.nome = nome;
        this.cpf = cpf;
    }

    //ASS => nome: CLiente, LP: [int,String,String]
    public Cliente(int id, String nome, String cpf){
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
    }

    public int getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getCpf() {
        return cpf;
    }


}
