package com.condelar.cader.app.controllers;

import com.condelar.cader.app.dto.cashinflow.CashInflowPaymentDTO;
import com.condelar.cader.app.dto.expense.ExpensePaymentDTO;
import com.condelar.cader.app.entiti.CashInflow;
import com.condelar.cader.app.dto.cashinflow.CashInflowDTO;
import com.condelar.cader.app.dto.cashinflow.CashInflowFilterDTO;
import com.condelar.cader.app.dto.cashinflow.CashInflowListDTO;
import com.condelar.cader.app.entiti.CashInflowPayment;
import com.condelar.cader.app.entiti.Expense;
import com.condelar.cader.app.entiti.ExpensePayment;
import com.condelar.cader.app.repositories.CashInflowRepository;
import com.condelar.cader.app.services.CashInflowService;
import com.condelar.cader.app.valid.CashInflowValid;
import com.condelar.cader.core.structure.BaseController;
import com.condelar.cader.core.structure.util.PackageDT;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cashInflow")
public class CashInflowController extends BaseController<CashInflow, CashInflowDTO, CashInflowFilterDTO, CashInflowListDTO, CashInflowRepository, CashInflowService, CashInflowValid> {

    @GetMapping("/cashInflowPayment/predictPayment/{idCashInflow}")
    public ResponseEntity<PackageDT<CashInflowPaymentDTO>> predictPayment(@PathVariable Long idCashInflow) {

        CashInflow cashInflow = getService().findById(idCashInflow);
        getValid().clear();
        getValid().validPreviewNewPayment(cashInflow);
        getValid().hasError();

        CashInflowPayment paymentPreview = getService().predictPayment(cashInflow);
        PackageDT<CashInflowPaymentDTO> pack = new PackageDT();
        pack.setData(new CashInflowPaymentDTO(paymentPreview));
        return ResponseEntity.ok().body(pack);
    }

    @PostMapping("/cashInflowPayment")
    public ResponseEntity<PackageDT<CashInflowPaymentDTO>> save(@RequestBody CashInflowPaymentDTO data) {
        CashInflow payment = getService().newPayment(data);
        getService().save(payment);
        PackageDT<CashInflowPaymentDTO> pack = new PackageDT();
        pack.setMessage("Saved record");
        return ResponseEntity.ok().body(pack);
    }

    @PutMapping("/cashInflowPayment/{id}")
    public ResponseEntity<PackageDT<CashInflowPaymentDTO>> update(@PathVariable Long id, @RequestBody CashInflowPaymentDTO data) {
        CashInflow cashInflow = getService().updatePayment(data);
        getService().save(cashInflow);
        PackageDT<CashInflowPaymentDTO> pack = new PackageDT();
        pack.setMessage("Updated record");
        return ResponseEntity.ok().body(pack);
    }

    @GetMapping("/cashInflowPayment/{idPayment}")
    public ResponseEntity<PackageDT<CashInflowPaymentDTO>> getExpensePayment(@PathVariable Long idPayment) {
        CashInflowPayment paymentPreviw = getService().getPaymentById(idPayment);
        PackageDT<CashInflowPaymentDTO> pack = new PackageDT();
        pack.setData(new CashInflowPaymentDTO(paymentPreviw));
        return ResponseEntity.ok().body(pack);
    }

    @DeleteMapping("/cashInflowPayment/{id}")
    public ResponseEntity<PackageDT<CashInflowPaymentDTO>> deleteExpensePayment(@PathVariable Long id) {
        CashInflow expense = getService().deletePayment(id);
        //   getService().save(expense);
        PackageDT<CashInflowPaymentDTO> pack = new PackageDT();
        pack.setMessage("Deleted record");
        return ResponseEntity.ok().body(pack);
    }
}

