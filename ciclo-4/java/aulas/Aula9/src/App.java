import com.aula9.Animal;
import com.aula9.Cachorro;
import com.aula9.Gato;
import com.aula9.Zoo;

public class App {
    public static void main(String[] args) throws Exception {
        Zoo z = new Zoo();
        z.enjaular(new Gato("Frajola"));
        z.enjaular(new Cachorro("Rex"));
        z.enjaular(new Cachorro("Floquinho"));

        z.todosEmitemSom();

        //------- DOWNCAST -------------
        Animal a = new Gato("Um gato");
        a.emitirSom();
        
        Gato g = (Gato) a;
        g.arranhar();
        System.out.println(a.getNome());

        //Erro: Classcast exception
        //Cachorro k = (Cachorro) a;
        //k.brincar();
        //-----------------------------
        //------ UPCAST ---------------
        Cachorro c = new Cachorro("Scooby");

        Animal b = (Animal) c;

        b.emitirSom();
        //-----------------------------

    }
}
