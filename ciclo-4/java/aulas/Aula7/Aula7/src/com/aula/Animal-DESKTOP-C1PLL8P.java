package com.aula;

public class Animal {

    private String nome;

    public Animal(String nome) {
        this.nome = nome;
    }

    public void mostrarNome(){
        System.out.println("Nome: " + nome);
    }

    public void emitirSom(){
        //NAO SEI QUAL ANIMAL
        System.out.println("SOM GENERICO");
    }

    public String getNome() {
        return nome;
    }

}
