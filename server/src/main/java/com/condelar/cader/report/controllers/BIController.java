package com.condelar.cader.report.controllers;

import com.condelar.cader.app.dto.cardinvoice.CardInvoiceDTO;
import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.otherdto.DescriptionStr;
import com.condelar.cader.core.structure.util.PackageDT;
import com.condelar.cader.report.constants.EnumOptionDate;
import com.condelar.cader.report.constants.EnumTypeParameter;
import com.condelar.cader.report.dto.TypeSearch;
import com.condelar.cader.report.entity.BI;
import com.condelar.cader.report.service.BIService;
import com.condelar.cader.toollibs.reflection.EntityScanner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/bi")
public class BIController {

    @Autowired
    BIService biService;

    @PostMapping("/estrutura")
    public ResponseEntity<BI> findLaunches(@RequestBody BI bi) {
        bi = biService.save();

        return ResponseEntity.ok().body(bi);
    }

    @PostMapping("/showClasses")
    public ResponseEntity<String> showClasses() {
        EntityScanner scanner = new EntityScanner();
        scanner.scanEntities3();
        return ResponseEntity.ok().body("Teste");
    }

    @GetMapping("/typesRegisters")
    public ResponseEntity<List<DescriptionStr>> getTypesRegisters() {
        List<TypeSearch> types = EntityScanner.scanEntities3();
        List<DescriptionStr> res = new ArrayList<>();
        Map map = new HashMap();
        types.forEach(m -> res.add(new DescriptionStr(m.getName(), m.getName()))
                //  map.put(m.getName(), m.getName())
        );
        return ResponseEntity.ok().body(res);
    }

    @GetMapping("/typesEnum")
    public ResponseEntity<List<DescriptionStr>> getTypesEnum() {
        return ResponseEntity.ok().body(EnumTypeParameter.toList());
    }

    @GetMapping("/typeOptionDate")
    public ResponseEntity<List<DescriptionId>> tgetTpeOptionDate() {
        return ResponseEntity.ok().body(EnumOptionDate.toList());
    }
}
