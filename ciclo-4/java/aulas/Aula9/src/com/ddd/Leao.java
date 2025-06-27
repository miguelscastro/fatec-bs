package com.ddd;

public interface Leao extends Mamifero{

    @Override
    default void emitirSom() {
       System.out.println("ROARRRRR");
    }

}
