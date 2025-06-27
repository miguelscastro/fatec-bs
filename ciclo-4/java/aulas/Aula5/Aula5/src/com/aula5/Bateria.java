package com.aula5;

public class Bateria {
    private int ponto;
    // final deixa o atributo constante
    private static final int MAX_CARGA = 5;
    public Bateria(int ponto) {
        this.ponto = Math.min(MAX_CARGA, ponto);
    }
    public boolean isVazio(){
        return ponto == 0;
    }
    public void gastar(){
        if(!isVazio())
            ponto--;
    }
    public void recarregar(){
        if(ponto<MAX_CARGA)
            ponto++;
    }
}
