package com.condelar.cader.base.structure;

import com.condelar.cader.base.dto.LoginDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/teste")
public class TestResource {

    @GetMapping("/{id}")
    public ResponseEntity<String> get(@PathVariable Long id) {
        System.out.println(id);
        return ResponseEntity.ok().body("sucesso" + id);
    }

    @PostMapping
    public ResponseEntity<String> save(@RequestBody LoginDTO pack) {
        System.out.println(pack);
        return ResponseEntity.ok().body("sucesso" + pack.login());
    }
}
