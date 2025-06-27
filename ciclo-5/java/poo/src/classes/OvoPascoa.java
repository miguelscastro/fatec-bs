package classes;

public class OvoPascoa {
    static int qtd = 0;

    private String sabor;
    private float peso;
    private boolean brinde;
    private double preco;

    public OvoPascoa(String sabor, float peso, boolean brinde) {
        qtd++;
        this.sabor = sabor;
        this.peso = peso;
        this.brinde = brinde;
    }

    public void adicionarPreco(double preco) {
        this.preco = preco;
    }
}
