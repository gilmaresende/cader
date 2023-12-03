package com.condelar.cader.app.controllers;

import com.condelar.cader.app.dto.lotofexpense.LotOfExpenseDTO;
import com.condelar.cader.app.dto.lotofexpense.LotOfExpenseFilterDTO;
import com.condelar.cader.app.dto.lotofexpense.LotOfExpenseListDTO;
import com.condelar.cader.app.entiti.LotOfExpense;
import com.condelar.cader.app.repositories.LotOfExpenseRepository;
import com.condelar.cader.app.services.LotOfExpenseService;
import com.condelar.cader.app.valid.LotOfExpenseValid;
import com.condelar.cader.core.structure.BaseController;
import com.condelar.cader.core.structure.util.PackageDT;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/lotOfExpense")
public class LotOfExpenseController extends BaseController<LotOfExpense, LotOfExpenseDTO, LotOfExpenseFilterDTO, LotOfExpenseListDTO, LotOfExpenseRepository, LotOfExpenseService, LotOfExpenseValid> {

    @GetMapping("previewExpenses")
    public ResponseEntity<PackageDT<LotOfExpenseDTO>> previewExpenses(@RequestBody LotOfExpenseDTO lotOfExpenseDTO) {
        getValid().clear();
        getValid().previewExpenses(lotOfExpenseDTO);
        getValid().hasError();
        getService().previewExpenses(lotOfExpenseDTO);
        PackageDT<LotOfExpenseDTO> pack = new PackageDT();
        pack.setData(lotOfExpenseDTO);
        return ResponseEntity.ok().body(pack);
    }
}

