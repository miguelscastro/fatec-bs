package com.ddd;

public interface Tigre extends Mamifero{

    @Override
    default void emitirSom() {
        System.err.println("ROAR SOH QUE DE TIGRE");    
    }

}
