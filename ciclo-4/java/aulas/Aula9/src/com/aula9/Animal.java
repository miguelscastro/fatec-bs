package com.aula9;

public abstract class Animal {

    private String nome;

    public Animal(String nome){
        this.nome = nome;
    }

    public String getNome(){
        return nome;
    }

    //N SABEMOS QUAL ANIMAL ESPECIFICO
    public abstract void emitirSom();

}
