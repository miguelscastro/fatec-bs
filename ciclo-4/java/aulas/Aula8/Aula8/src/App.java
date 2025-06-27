// import com.aula.sobrecarga.Cliente;
// import com.aula.sobrecarga.Produto;
// import com.aula.sobrecarga.Tabela;

import com.aula.sobrescrita.Gato;
import com.aula.sobrescrita.Cachorro;
import com.aula.sobrescrita.Animal;

public class App {
    public static void main(String[] args) throws Exception {
        // String sql = Tabela.inserir(new Produto("Mesa", 7000));
        // System.out.println(sql);

        // String sql2 = Tabela.inserir(new Cliente("Carlos", "999.999.999-20"));
        // System.out.println(sql2);

        Gato g = new Gato("Frajola");
        g.emitirSom();

        Cachorro c = new Cachorro("Rex");
        c.emitirSom();

        
        //Polimorfismo e subtipos: é uma característica do sistema de subtipos que permite o uso de subtipos de um determinado tipo em um contexto.
        // Por exemplo, sejam A e B classes com B subtipo de A então o método: public void metodo(A a){}, as chamadas metodo(new A()) e metodo(new B()) ou A a = new A(); A a = new B(); são válidas!

        // Pode pois Gato <= Animal
        Animal a = new Gato("Frank");
        // O polimorfismo funciona para métodos que são generalizáveis (Override)
        a.emitirSom();
        // a.ronronar(); // Não funciona, pois o polimorfismo não consegue acessar métodos dos subtipos (nesse caso, gato)
    }

}

