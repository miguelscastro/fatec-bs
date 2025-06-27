import com.aula.Animal;
import com.aula.Cachorro;
import com.aula.Gato;

public class App {
    public static void main(String[] args) {
        Animal a = new Animal("Generico");
        a.emitirSom(); //Dele
        a.mostrarNome(); //Dele

        Cachorro c = new Cachorro("REX","PITBULL");
        c.emitirSom(); //Herança
        c.latir(); //Dele
        c.mostrarRaca(); //Dele
        c.mostrarNome(); //Herança

        Gato g = new Gato("Frajola");
        g.emitirSom(); //Herança
        g.miar(); //Dele
        g.mostrarNome(); //Herança

        System.out.println(c.toString());
    }
}
