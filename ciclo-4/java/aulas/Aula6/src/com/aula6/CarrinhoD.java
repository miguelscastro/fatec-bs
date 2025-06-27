package com.aula6;

import java.util.ArrayList;

public class CarrinhoD{

    private ArrayList<Produto> produtos;

    public CarrinhoD(){
        produtos = new ArrayList<Produto>();
    }

    public void inserir(Produto p) throws Exception{
        if(p == null){
            throw new Exception("Produto não pode ser nulo");
        }
        produtos.add(p);
    }

    public void remover(Produto p){
        produtos.remove(p);
    }

    public void listar(){
        for(Produto p : produtos){
            p.mostrar();
        }
    }

    public double calcularPreco(){
        double total = 0;
        for(Produto p : produtos){
        total = total + p.getPreco();
    }
    return total;
    }

    public double calcularPrecoTipo(Tipo t){
        double total = 0;
        for(Produto p : produtos){
            if(p.verificarTipo(t))
            total = total + p.getPreco();
        }
        return total;
    }
    
}