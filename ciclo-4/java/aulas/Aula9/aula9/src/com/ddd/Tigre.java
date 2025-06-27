package com.ddd;


public interface Tigre extends Mamifero {
    @Override
    default public void emitirSom(){
        System.out.println("ROAR de tigre");
    }
}
