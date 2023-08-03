package com.condelar.cader.toollibs.hibernet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/query")
public class QueryResource {

    @Autowired
    private QueryHqlService component;

    @PostMapping
    public ResponseEntity<List<Map>> save(@RequestBody QueryDTO data) {
        List<Map> datas = component.executeToMap(data.getQuery());
        return ResponseEntity.ok().body(datas);
    }
}
