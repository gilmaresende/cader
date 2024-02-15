package com.condelar.cader.app.valid;

import com.condelar.cader.app.dto.expensepayment.ExpensePaymentDTO;
import com.condelar.cader.app.entiti.Expense;
import com.condelar.cader.app.entiti.ExpensePayment;
import com.condelar.cader.core.structure.BaseValid;
import org.springframework.stereotype.Component;

public class ExpensePaymentValid extends BaseValid<ExpensePaymentDTO, ExpensePayment> {

    @Override
    public void validDtoToSave(ExpensePaymentDTO dto) {

    }

    @Override
    public void validObject(ExpensePayment ob) {
        Double payValue = ob.getExpense().getPayments().stream().mapToDouble(v -> v.getValue()).sum();
        if (ob.getValue() - payValue < 0) {
            addErrors("value", "Pay value can not is bigger than Value Expense!");
        }
    }

    @Override
    public void validDelete(ExpensePayment ob) {

    }
    public void validPreviewNewPayment(Expense ob) {
        Double payValue = ob.getPayments().stream().mapToDouble(v -> v.getValue()).sum();
        if (ob.getValue() - payValue <= 0) {
            addErrors("value", "Expense is closed!");
        }
    }
}

