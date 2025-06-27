package com.example.financas.resources;

import java.util.List;

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

import com.example.financas.model.Conta;
import com.example.financas.service.ContaService;

@RestController
@RequestMapping("/contas")

public class ContaResource {
    private ContaService contas = new ContaService();

    @GetMapping
    public ResponseEntity<List<Conta>> listar() {
        return ResponseEntity.ok(contas.getAll());
    }

    @GetMapping(value = "/{numero}")
    public ResponseEntity<?> get(@PathVariable Integer numero) {
        Conta _conta = contas.get(numero);
        if (_conta != null)
            return ResponseEntity.ok(_conta);
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

    @DeleteMapping(value = "/{numero}")
    public ResponseEntity<?> delete(@PathVariable Integer numero) {
        if (contas.delete(numero)) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
}