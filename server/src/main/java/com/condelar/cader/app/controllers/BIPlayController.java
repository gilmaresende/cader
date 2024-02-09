package com.condelar.cader.app.controllers;

import com.condelar.cader.app.dto.bi.BIDTO;
import com.condelar.cader.app.dto.bi.BIFilterDTO;
import com.condelar.cader.app.dto.bi.BIListDTO;
import com.condelar.cader.app.entiti.BI;
import com.condelar.cader.app.repositories.BIRepository;
import com.condelar.cader.app.services.BIService;
import com.condelar.cader.app.valid.BIValid;
import com.condelar.cader.core.dto.DownloadDTO;
import com.condelar.cader.core.otherdto.DescriptionStr;
import com.condelar.cader.core.structure.BaseController;
import com.condelar.cader.core.structure.util.PackageDT;
import com.condelar.cader.tool.download.ToolDownload;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;

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
    public ResponseEntity<DownloadDTO> save(@RequestBody LinkedHashMap data) {
        DownloadDTO report = getService().executeBI(data);
        return ResponseEntity.ok(report);
    }

}

