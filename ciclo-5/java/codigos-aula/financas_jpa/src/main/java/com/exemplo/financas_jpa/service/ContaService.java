package com.exemplo.financas_jpa.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exemplo.financas_jpa.model.Conta;
import com.exemplo.financas_jpa.repositories.ContaRepository;

@Service
public class ContaService {
	@Autowired
	private ContaRepository contaRepo;

	public ContaService() {
	}

	public void add(Conta conta) {
		contaRepo.save(conta);
	}

	public List<Conta> getAll() {
		return contaRepo.findAll();
	}

	public Conta get(Conta conta) {
		Optional<Conta> _conta = contaRepo.findById(conta.getNumero());
		return _conta.orElse(null);
	}

	public Conta get(Long id) {
		return get(new Conta(id));
	}

	public boolean update(Conta conta) {
		if (contaRepo.existsById(conta.getNumero())) {
			contaRepo.save(conta);
			return true;
		}
		return false;
	}

	public boolean delete(Long id) {
		Optional<Conta> _conta = contaRepo.findById(id);
		if (_conta.isPresent()) {
			contaRepo.delete(_conta.get());
			return true;
		}
		return false;
	}
}