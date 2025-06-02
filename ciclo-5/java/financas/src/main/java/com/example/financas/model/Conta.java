package com.example.financas.model;

import java.util.Objects;

public class Conta {
    private String titular;
    private String banco;
    private String agencia;
    private Integer numero;

    public Conta() {
    }

    public Conta(Integer numero) {
        setNumero(numero);
    }

    public String getTitular() {
        return titular;
    }

    public void setTitular(String titular) {
        this.titular = titular;
    }

    public String getBanco() {
        return banco;
    }

    public void setBanco(String banco) {
        this.banco = banco;
    }

    public String getAgencia() {
        return agencia;
    }

    public void setAgencia(String agencia) {
        this.agencia = agencia;
    }

    public Integer getNumero() {
        return numero;
    }

    public void setNumero(Integer numero) {
        this.numero = numero;
    }

    @Override
    public int hashCode() {
        return Objects.hash(agencia, banco, numero, titular);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Conta other = (Conta) obj;
        return Objects.equals(agencia, other.agencia) && Objects.equals(banco, other.banco)
                && Objects.equals(numero, other.numero) && Objects.equals(titular, other.titular);
    }

    @Override
    public String toString() {
        return "Conta [titular=" + titular + ", banco=" + banco + ", agencia=" + agencia + ", numero=" + numero + "]";
    }

}