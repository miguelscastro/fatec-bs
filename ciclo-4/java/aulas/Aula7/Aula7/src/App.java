import com.aula.Animal;
import com.aula.Gato;
import com.aula.Cachorro;

// Herança : é um relacionamento hierarquico entre classes. A classe superior, superclasse, provê acesso privilegiado para suas classes inferiores. NÃO PODE HAVER DOIS PAIS.

// Object é superclasse de todas as classes.Toda classe terá acesso aos métodos de Object: toString(), hashCode(), notify(), getClass()

public class App {
    public static void main(String[] args) throws Exception {
        Animal a = new Animal("Generico");

        Cachorro c = new Cachorro("REX", "PITBULL");
        c.emitirSom(); //Herança
        c.latir(); //Dele
        c.mostrarRaca(); //Dele
        c.mostrarNome(); //Herança

        Gato g = new Gato("Frajola");
        g.emitirSom();
        g.miar();
        g.mostrarNome();

    }
}
