package com.aula9;

public class Cachorro extends Animal implements Nadavel, Brincavel{

    public Cachorro(String nome) {
        super(nome);
    }

    @Override
    public void emitirSom(){
        System.out.println("AU AU");
    }

    public void latir(){
        System.out.println("AU AU");
    }

    @Override
    public void brincar(){
        System.out.println("Brincou...");
    }

    @Override 
    public void nadar(){
        System.out.println("Nado cachorrinho");
    }
}
