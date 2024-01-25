package com.condelar.cader.app.controllers;

import com.condelar.cader.app.dto.bi.BIDTO;
import com.condelar.cader.app.dto.bi.BIFilterDTO;
import com.condelar.cader.app.dto.bi.BIListDTO;
import com.condelar.cader.app.dto.bi.BIPlayDTO;
import com.condelar.cader.app.entiti.BI;
import com.condelar.cader.app.repositories.BIRepository;
import com.condelar.cader.app.services.BIService;
import com.condelar.cader.app.valid.BIValid;
import com.condelar.cader.core.otherdto.DescriptionStr;
import com.condelar.cader.core.structure.BaseController;
import com.condelar.cader.core.structure.RegisterEntity;
import com.condelar.cader.core.structure.util.PackageDT;
import com.condelar.cader.tool.csv.ToolCsv;
import com.condelar.cader.tool.download.ToolDownload;
import com.condelar.cader.tool.util.ToolLink;
import com.condelar.cader.toollibs.hibernet.QueryDTO;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/biPlay")
public class BIPlayController extends BaseController<BI, BIDTO, BIFilterDTO, BIListDTO, BIRepository, BIService, BIValid> {

    @GetMapping("comboEntity/{entity}")
    public ResponseEntity<PackageDT<List<DescriptionStr>>> get(@PathVariable String entity) {
        List<DescriptionStr> combo = getService().findComboReport(entity);
        System.out.println(entity);
        PackageDT pack = new PackageDT();
        pack.setData(combo);
        return ResponseEntity.ok().body(pack);
    }

    @PostMapping("playBi")
//    public ResponseEntity<String> save(@RequestBody LinkedHashMap data) {
    public HttpEntity<byte[]> save(@RequestBody BIPlayDTO data) {


       String report = getService().executeBI(data);
       // Number idBi =(Number) data.get("idBI");
        //Object parameter = data.get("parameter");

     //   System.out.println(idBi);

        System.out.println(data);
        return ToolDownload.getFile("select", "csv", report.getBytes());
    }





}

