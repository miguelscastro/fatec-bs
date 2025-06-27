package com.sobrescrita;

public class Animal {

    private String nome;

    public Animal(String nome){
        this.nome = nome;
    }

    public void emitirSom(){
        System.out.println("SOM GENERICO");
    }

    public String getNome() {
        return nome;
    }

}
