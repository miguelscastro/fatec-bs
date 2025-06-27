package com.aula.sobrecarga;

public class Produto {
    private int id;
    private String nome;
    private int preco;
    
    public Produto(int id, String nome, int preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }

    public Produto(String nome, int preco) {
        this.nome = nome;
        this.preco = preco;
    }

    public int getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public int getPreco() {
        return preco;
    }

    
}
