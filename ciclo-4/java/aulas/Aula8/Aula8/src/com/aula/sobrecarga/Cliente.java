package com.aula.sobrecarga;

public class Cliente {
    private int id;
    private String nome, cpf;

    //  Sobrecarga: É uma maneira de resolver ambiguidades em relação a nome de métodos. A sobrecarga propõe uma solução p/ essas ambiguidades usando a ASSINATURA de um método.

    // Assinatura --> nome do método + lista de parâmetros

    // Métodos que têm o mesmo nome e recebem parâmetros diferentes são válidos (a ordem em que esses parâmetros são passados tbm interfere EX: [int x, string a] != [string a, int x] ). 

    // Revisão matemática
    //[1,2] != [2,1] 
    //{1,2} = {2,1}
    // [1,2,2] != [1,2]
    // {1,3,3} = {1,3}

    // ASS => nome: Cliente, LP: [String, String]
    public Cliente(String nome, String cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }

    // Assinatura => nome: Cliente, LP: [int, String, String]
    public Cliente(int id, String nome, String cpf) {
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
