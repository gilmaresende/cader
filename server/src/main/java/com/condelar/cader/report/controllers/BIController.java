package com.condelar.cader.report.controllers;

import com.condelar.cader.core.structure.util.PackageDT;
import com.condelar.cader.app.dto.bi.BIDTOList;
import com.condelar.cader.app.dto.bi.BIDTO;
import com.condelar.cader.app.dto.bi.BIDataDTO;
import com.condelar.cader.app.entiti.BI;
import com.condelar.cader.report.service.BIService;
import com.condelar.cader.tool.util.ToolLink;
import com.condelar.cader.toollibs.ggson.GJsonImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@RestController
//@RequestMapping("/bi")
public class BIController {

    @Autowired
    BIService biService;

   // @PostMapping
    public ResponseEntity<PackageDT<BIDataDTO>> save(@RequestBody BIDTO bi) {
        BIDataDTO dto = GJsonImp.toObject(BIDataDTO.class, bi.getStr());
        BI ob = biService.toOb(dto);
        ob = biService.save(ob);
        dto.setId(ob.getId());
        PackageDT<BIDataDTO> pack = new PackageDT();
        pack.setRotaOb(ToolLink.createURI(ob).getPath());
        pack.setData(dto);
        return ResponseEntity.ok().body(pack);
    }

    //@PostMapping("/list")
    public ResponseEntity<PackageDT<BIDTOList>> filter(@RequestBody BIDTOList filter) {
        PackageDT<BIDTOList> res = new PackageDT<BIDTOList>();
        List<BIDTOList> all = biService.getAll();
        res.setDatas(all);
        return ResponseEntity.ok().body(res);
    }

   // @GetMapping("/{id}")
    public ResponseEntity<PackageDT<BIDataDTO>> get(@PathVariable Long id) {
        BIDataDTO bi = biService.toDTO(biService.getById(id));
        PackageDT<BIDataDTO> pack = new PackageDT();
        pack.setData(bi);
        return ResponseEntity.ok().body(pack);
    }
   // @PutMapping("/{id}")
    public ResponseEntity<PackageDT<BIDataDTO>> update(@PathVariable Long id, @RequestBody BIDTO bi) {
        BIDataDTO dto = GJsonImp.toObject(BIDataDTO.class, bi.getStr());
        BI ob = biService.getById(id);
        ob.setName(dto.getName());
        ob.setBody(GJsonImp.getInstance().toString(dto).getBytes());
        ob = biService.save(ob);
        dto.setId(ob.getId());
        PackageDT<BIDataDTO> pack = new PackageDT();
        pack.setData(dto);
        return ResponseEntity.ok().body(pack);
    }


}
