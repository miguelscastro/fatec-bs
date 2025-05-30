package classes;

import enums.TiposMotor;

public class Motor {
    private Integer potencia;
    private String descricao;
    private TiposMotor tipoMotor;
    private boolean estadoMotor;

    public Motor(Integer potencia, String descricao, TiposMotor tipoMotor, boolean estadoMotor) {
        this.potencia = potencia;
        this.descricao = descricao;
        this.tipoMotor = tipoMotor;
        this.estadoMotor = estadoMotor;
    }

    public Integer getPotencia() {
        return potencia;
    }

    public void setPotencia(Integer potencia) {
        this.potencia = potencia;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public TiposMotor getTipoMotor() {
        return tipoMotor;
    }

    public void setTipoMotor(TiposMotor tipoMotor) {
        this.tipoMotor = tipoMotor;
    }

    public boolean isEstadoMotor() {
        return estadoMotor;
    }

    public void setEstadoMotor(boolean estadoMotor) {
        this.estadoMotor = estadoMotor;
    }
}
