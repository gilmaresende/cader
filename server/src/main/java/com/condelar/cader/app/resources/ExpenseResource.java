package com.condelar.cader.app.resources;

import com.condelar.cader.app.domain.Expense;
import com.condelar.cader.app.domain.ExpensePayment;
import com.condelar.cader.app.dto.expense.ExpenseDTO;
import com.condelar.cader.app.dto.expense.ExpenseFilterDTO;
import com.condelar.cader.app.dto.expense.ExpenseListDTO;
import com.condelar.cader.app.dto.expense.ExpensePaymentDTO;
import com.condelar.cader.app.repositories.ExpenseRepository;
import com.condelar.cader.app.services.ExpenseService;
import com.condelar.cader.app.valid.ExpenseValid;
import com.condelar.cader.core.structure.BaseResource;
import com.condelar.cader.core.structure.util.PackageDT;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/expense")
public class ExpenseResource extends BaseResource<Expense, ExpenseDTO, ExpenseFilterDTO, ExpenseListDTO, ExpenseRepository, ExpenseService, ExpenseValid> {
    @GetMapping("/expensePayment/predictPayment/{idExpense}")
    public ResponseEntity<PackageDT<ExpensePaymentDTO>> predictPayment(@PathVariable Long idExpense) {

        Expense expense = getService().findById(idExpense);
        getValid().clear();
        getValid().validPreviewNewPayment(expense);
        getValid().hasError();

        ExpensePayment paymentPreviw = getService().predictPayment(expense);
        PackageDT<ExpensePaymentDTO> pack = new PackageDT();
        pack.setData(new ExpensePaymentDTO(paymentPreviw));
        return ResponseEntity.ok().body(pack);
    }

    @PostMapping("/expensePayment")
    public ResponseEntity<PackageDT<ExpensePaymentDTO>> save(@RequestBody ExpensePaymentDTO data) {
        System.out.println(data);

        Expense expense = getService().newPayment(data);
        getService().save(expense);

        PackageDT<ExpensePaymentDTO> pack = new PackageDT();
        pack.setMessage("Saved record");
        return ResponseEntity.ok().body(pack);
    }

    @PutMapping("/expensePayment/{id}")
    public ResponseEntity<String> update(@PathVariable Long id, @RequestBody ExpensePaymentDTO data) {
        System.out.println(id);
        System.out.println(data);
        return ResponseEntity.ok().body("Updated record");
    }

    @GetMapping("/expensePayment/{idPayment}")
    public ResponseEntity<PackageDT<ExpensePaymentDTO>> getExpensePayment(@PathVariable Long idPayment) {
        ExpensePayment paymentPreviw = getService().getPaymentById(idPayment);
        PackageDT<ExpensePaymentDTO> pack = new PackageDT();
        pack.setData(new ExpensePaymentDTO(paymentPreviw));
        return ResponseEntity.ok().body(pack);
    }

    @DeleteMapping("/expensePayment/{id}")
    public ResponseEntity<PackageDT<ExpensePaymentDTO>> deleteExpensePayment(@PathVariable Long id) {
        System.out.println(id);
        PackageDT<ExpensePaymentDTO> res = new PackageDT<ExpensePaymentDTO>();
        res.setMessage("Deleted record!");
        return ResponseEntity.ok().body(res);
    }
}
