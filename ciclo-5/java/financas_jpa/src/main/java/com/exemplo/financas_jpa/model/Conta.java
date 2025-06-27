package com.exemplo.financas_jpa.model;

import java.util.Objects;

public class Conta {
	private String titular;
	private String banco;
	private String agencia;
	private Long numero;

	public Conta() {
	}

	public Conta(Long numero) {
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



	public Long getNumero() {
		return numero;
	}

	public void setNumero(Long numero) {
		this.numero = numero;
	}

	@Override
	public int hashCode() {
		return Objects.hash(numero);
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

	// getters e setters
	// hashCode e equals
	// toString
	
}
