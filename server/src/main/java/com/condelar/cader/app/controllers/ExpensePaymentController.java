package com.condelar.cader.app.controllers;

import com.condelar.cader.app.entiti.Expense;
import com.condelar.cader.app.entiti.ExpensePayment;
import com.condelar.cader.app.dto.expensepayment.ExpensePaymentDTO;
import com.condelar.cader.app.dto.expensepayment.ExpensePaymentFilterDTO;
import com.condelar.cader.app.dto.expensepayment.ExpensePaymentListDTO;
import com.condelar.cader.app.repositories.ExpensePaymentRepository;
import com.condelar.cader.app.services.ExpensePaymentService;
import com.condelar.cader.app.services.ExpenseService;
import com.condelar.cader.app.valid.ExpensePaymentValid;
import com.condelar.cader.core.structure.BaseController;
import com.condelar.cader.core.structure.util.PackageDT;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/expensePayment")
public class ExpensePaymentController extends BaseController<ExpensePayment, ExpensePaymentDTO, ExpensePaymentFilterDTO, ExpensePaymentListDTO, ExpensePaymentRepository, ExpensePaymentService, ExpensePaymentValid> {

    @Autowired
    ExpenseService expenseService;

    @GetMapping("/predictPayment/{idExpense}")
    public ResponseEntity<PackageDT<ExpensePaymentDTO>> predictPayment(@PathVariable Long idExpense) {

        Expense expense = expenseService.findById(idExpense);
        ExpensePaymentValid valid = getValid();
        valid.validPreviewNewPayment(expense);
        valid.hasError();

        ExpensePayment paymentPreview = getService().predictPayment(expense);
        PackageDT<ExpensePaymentDTO> pack = new PackageDT();
        pack.setData(new ExpensePaymentDTO(paymentPreview));
        return ResponseEntity.ok().body(pack);
    }
}

