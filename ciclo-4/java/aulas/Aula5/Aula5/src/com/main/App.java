package com.main;

import com.aula5.Bateria;
import com.aula5.Celular;

public class App {

    public static void main(String[] args) {
        Bateria b = new Bateria(2);
        Celular cel = new Celular(b, "Eu");

        cel.chamar();
        cel.desligar();
        cel.chamar();
        cel.ligar();
        cel.conectarUSB(2);
        cel.chamar();
        System.out.println(b.isVazio());
    }
}
