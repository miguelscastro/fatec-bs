package com.aula9;

public interface Nadavel {

    //Atributos constantes apenas
    //final int QT = 70;

    void nadar();

    default void algo(){
        System.out.println("Metodo default");
    }

}
