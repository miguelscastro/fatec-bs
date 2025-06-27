package com.aula4;

public class Sapo {
    private static int qtSapo;
    private int qtPulo;

    public Sapo(){
        qtSapo = qtSapo + 1;
        qtPulo = qtPulo + 1;
    }
    public static void mostrarSapos() {
        System.out.println("Sapos: " + qtSapo);
    }
    public void mostrarPulos() {
        System.out.println("Pulo: " + qtPulo);
    }
}
