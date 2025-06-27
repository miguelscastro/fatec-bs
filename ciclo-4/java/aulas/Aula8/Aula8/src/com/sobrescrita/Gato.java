package com.sobrescrita;

public class Gato extends Animal{

    public Gato(String nome){
        super(nome);
    }

    @Override
    public void emitirSom(){
        System.out.println("MIAU");
    }

    public void ronronar(){
        System.out.println("purrrrrrr");
    }
}
