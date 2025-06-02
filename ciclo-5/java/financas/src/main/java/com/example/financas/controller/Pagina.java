package com.example.financas.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Pagina {

    @GetMapping("/test")
    public String teste() {
        return "Teste de rota";
    }
}
