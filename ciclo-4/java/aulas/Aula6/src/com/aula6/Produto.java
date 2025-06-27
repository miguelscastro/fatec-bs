package com.aula6;

public class Produto {
    private String nome;
    private double preco;
    private Tipo tipo;

    public Produto(String nome, double preco, Tipo tipo) {
        this.nome = nome;
        this.preco = preco;
        this.tipo = tipo;
    }
    public boolean verificarTipo(Tipo tipo){
        return this.tipo == tipo; 
    }
    public String getNome() {
        return nome;
    }
    public double getPreco() {
        return preco;
    }
    public void mostrar() {
        System.out.println(nome);
        System.out.println(preco);
        System.out.println(tipo);
    }
}