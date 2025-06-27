package com.aula6;

public class Carrinho {
    // CArrinho HAS-MANY Produto
    private Produto[] produtos;
    // QT_MAX vai ser uma constante inteira (final)
    private int qtAtual;
    private static final int QT_MAX = 5;

    public Carrinho(){
        // Nesse caso temos um arr-ay de 5 produtos.
        produtos = new Produto[QT_MAX];
    }
    public void inserir(Produto p) throws Exception {
        if (p == null)
            throw new Exception("produto nulo não pode");
            if (qtAtual >= 5) {
                throw new Exception("não há espaço para mais produtos");
            }
            produtos[qtAtual++] = p;
    }
    public Produto remover(){
        Produto topo = produtos[qtAtual-1];
        produtos[--qtAtual] = null;
        return topo;
    }
    public void listar(){
        for(int i=0;i<qtAtual;i++){
            produtos[i].mostrar();
        }
    }
    public double calcularPreco(){
        double total = 0;
        for(int i=0;i<qtAtual;i++) {
            // não pode .preco, pois preco é privado na classe Produto
            total = total+produtos[i].getPreco();
        }
        return total;
    }
    public double calcularPrecoTipo(Tipo tipo){
        double total = 0;
        for(int i=0;i<qtAtual; i++) {
            if(produtos[i].verificarTipo(tipo))
                total = total+produtos[i].getPreco();
        }
        return total;
    }
    public void buscar(String nome) {
        for(int i=0;i<qtAtual;i++){
            if(produtos[i].getNome().equals(nome)){
                produtos[i].mostrar();
            }
        }
    }
}
