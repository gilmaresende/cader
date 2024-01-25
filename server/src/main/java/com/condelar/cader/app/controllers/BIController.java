package com.condelar.cader.app.controllers;

import com.condelar.cader.app.constants.enuns.EnumOptionDate;
import com.condelar.cader.app.constants.enuns.EnumTypeParameter;
import com.condelar.cader.app.dto.bi.BIDTO;
import com.condelar.cader.app.entiti.BI;
import com.condelar.cader.app.dto.bi.BIFilterDTO;
import com.condelar.cader.app.dto.bi.BIListDTO;
import com.condelar.cader.app.repositories.BIRepository;
import com.condelar.cader.app.services.BIService;
import com.condelar.cader.app.valid.BIValid;
import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.otherdto.DescriptionStr;
import com.condelar.cader.core.otherdto.TypeSearch;
import com.condelar.cader.core.structure.BaseController;
import com.condelar.cader.toollibs.reflection.EntityScanner;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/bi")
public class BIController extends BaseController<BI, BIDTO, BIFilterDTO, BIListDTO, BIRepository, BIService, BIValid> {


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

