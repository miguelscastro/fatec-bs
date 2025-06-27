package com.aula.projeto;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloControler {

    @GetMapping("/")
    public String index(){
        // index procura no resources o index.html
        return "index";
    }

    @GetMapping("/p1")
    public String p1() {
        return "p1";
    }
    @GetMapping("/p2")
    public String p2() {
        return "p2";
    }
}
