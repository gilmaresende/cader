package com.condelar.cader.report.controllers;

import com.condelar.cader.core.errors.exceptions.UpdateException;
import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.otherdto.DescriptionStr;
import com.condelar.cader.core.structure.RegisterEntity;
import com.condelar.cader.core.structure.util.PackageDT;
import com.condelar.cader.report.constants.EnumOptionDate;
import com.condelar.cader.report.constants.EnumTypeParameter;
import com.condelar.cader.report.dto.BIDTOList;
import com.condelar.cader.report.dto.BIDtoStr;
import com.condelar.cader.report.dto.TypeSearch;
import com.condelar.cader.report.dto.BIDTO;
import com.condelar.cader.report.entity.BI;
import com.condelar.cader.report.service.BIService;
import com.condelar.cader.tool.util.ToolLink;
import com.condelar.cader.toollibs.ggson.GJsonImp;
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

    @PostMapping
    public ResponseEntity<PackageDT<BIDTO>> save(@RequestBody BIDtoStr bi) {
        BIDTO dto = GJsonImp.toObject(BIDTO.class, bi.getStr());
        BI ob = biService.toOb(dto);
        ob = biService.save(ob);
        dto.setId(ob.getId());
        PackageDT<BIDTO> pack = new PackageDT();
        pack.setRotaOb(ToolLink.createURI(ob).getPath());
        pack.setData(dto);
        return ResponseEntity.ok().body(pack);
    }

    @PostMapping("/list")
    public ResponseEntity<PackageDT<BIDTOList>> filter(@RequestBody BIDTOList filter) {
        PackageDT<BIDTOList> res = new PackageDT<BIDTOList>();
        List<BIDTOList> all = biService.getAll();
        res.setDatas(all);
        return ResponseEntity.ok().body(res);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PackageDT<BIDTO>> get(@PathVariable Long id) {
        BIDTO bi = biService.toDTO(biService.getById(id));
        PackageDT<BIDTO> pack = new PackageDT();
        pack.setData(bi);
        return ResponseEntity.ok().body(pack);
    }
    @PutMapping("/{id}")
    public ResponseEntity<PackageDT<BIDTO>> update(@PathVariable Long id, @RequestBody BIDtoStr bi) {
        BIDTO dto = GJsonImp.toObject(BIDTO.class, bi.getStr());
        BI ob = biService.getById(id);
        ob.setName(dto.getName());
        ob.setBody(GJsonImp.getInstance().toString(dto).getBytes());
        ob = biService.save(ob);
        dto.setId(ob.getId());
        PackageDT<BIDTO> pack = new PackageDT();
        pack.setData(dto);
        return ResponseEntity.ok().body(pack);
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
