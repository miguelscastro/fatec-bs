package com.aula9;

public interface Nadavel {
    // Atributos constantes apenas
    // EX: int final qt = 70;
    void nadar();

    default void algo(){
        System.out.println("Metodo default");
    }
}
