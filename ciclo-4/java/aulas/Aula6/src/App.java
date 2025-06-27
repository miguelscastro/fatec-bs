import com.aula6.Carrinho;
import com.aula6.Produto;
import com.aula6.Tipo;

public class App {
    public static void main(String[] args) throws Exception {
        Produto p1 = new Produto("Lapis", 5, Tipo.Escritório);
        Produto p2 = new Produto("Coca Zero", 6, Tipo.Alimento);
        Produto p3 = new Produto("Mouse", 10, Tipo.Tecnológico);
        Produto p4 = new Produto("Teclado", 12, Tipo.Escritório);
        Carrinho k = new Carrinho();
        k.inserir(p1);
        k.inserir(p2);
        k.inserir(p3);
        k.inserir(p4);
        k.listar();
        System.out.println(k.calcularPreco());
        System.out.println(k.calcularPrecoTipo(Tipo.Escritório));
        k.buscar("Lapis");
    }
}