package classes;

public class Carro {
    private int ano;
    private String modelo;
    private String marca;
    private int velocimetro;
    private Motor motor;

    public Carro(int ano, String modelo, String marca, int velocimetro, Motor motor) {
        this.ano = ano;
        this.modelo = modelo;
        this.marca = marca;
        this.velocimetro = 0;
        this.motor = motor;
    }

    public boolean acelerar() {
        if (this.velocimetro < 100 && this.motor.isEstadoMotor()) {
            this.velocimetro += 20;
            return true;
        }
        return false;
    }

    public boolean frenar() {
        if (this.velocimetro >= 30 && this.motor.isEstadoMotor()) {
            this.velocimetro -= 5;
            return true;
        }
        return false;
    }

    public boolean ignizar() {
        if (this.velocimetro == 0 && this.motor.isEstadoMotor() == false) {
            this.motor.setEstadoMotor(true);
            return this.motor.isEstadoMotor();
        } else if (this.velocimetro == 0 && this.motor.isEstadoMotor() == true) {
            this.motor.setEstadoMotor(false);
            return this.motor.isEstadoMotor();
        }
        return this.motor.isEstadoMotor();
    }

    public int getAno() {
        return ano;
    }

    public void setAno(int ano) {
        this.ano = ano;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public void setVelocimetro(int velocimetro) {
        this.velocimetro = velocimetro;
    }

    public int getVelocimetro() {
        return velocimetro;
    }
}
