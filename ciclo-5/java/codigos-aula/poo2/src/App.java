import classes.Carro;
import classes.Motor;
import enums.TiposMotor;

public class App {
    public static void main(String[] args) throws Exception {
        Motor m = new Motor(122, "blabla", TiposMotor.COMBUSTAO, false);
        Carro c = new Carro(1999, "fusca", "volkswagen", 0, m);

        ;
        System.out.println(c.ignizar());
        c.acelerar();
        c.acelerar();
        c.acelerar();
        c.acelerar();
        System.out.println(c.acelerar() ? "Acelerou" : "Nao acelerou");
        System.out.println(c.getVelocimetro());
        System.out.println(m.getTipoMotor());
    }
}
