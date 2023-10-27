package com.condelar.cader.core.about;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/about")
public class AboutController {

    @GetMapping
    public String about() {
        StringBuilder sb = new StringBuilder();
        sb.append("Versão: 20231026").append("\n");
        sb.append("Contato: condelar@gmail.com").append("\n");
        return sb.toString();
    }
}
