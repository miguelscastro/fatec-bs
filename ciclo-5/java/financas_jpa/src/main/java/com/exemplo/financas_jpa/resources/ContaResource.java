package com.exemplo.financas_jpa.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exemplo.financas_jpa.model.Conta;
import com.exemplo.financas_jpa.service.ContaService;

@RestController
@RequestMapping("/contas")
public class ContaResource {
	@Autowired
	private ContaService contas;

	@GetMapping
	public ResponseEntity<List<Conta>> getAll() {
		return ResponseEntity.ok(contas.getAll());
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<?> get(@PathVariable("id") Long id) {
		Conta _conta = contas.get(id);
		if (_conta != null) {
			return ResponseEntity.ok(_conta);
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}

	@PostMapping
	public ResponseEntity<Conta> add(@RequestBody Conta conta) {
		contas.add(conta);
		return ResponseEntity.ok(conta);
	}

	@PutMapping
	public ResponseEntity<?> update(@RequestBody Conta conta) {
		if (contas.update(conta)) {
			return ResponseEntity.ok(conta);
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") Long id) {
		if (contas.delete(id)) {
			return ResponseEntity.ok().build();
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
}