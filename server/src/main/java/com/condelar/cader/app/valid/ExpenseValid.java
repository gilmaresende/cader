package com.condelar.cader.app.valid;

import com.condelar.cader.app.entiti.Expense;
import com.condelar.cader.app.dto.expense.ExpenseDTO;
import com.condelar.cader.core.structure.BaseValid;
import org.springframework.stereotype.Component;

public class ExpenseValid extends BaseValid<ExpenseDTO, Expense> {

    @Override
    public void validDtoToSave(ExpenseDTO dto) {
        if (!hasContent(dto.getDescription())) {
            addErrors("description", "Description can not is empty!");
        }
        if (isNull(dto.getDueDate())) {
            addErrors("duaDate", "Due Date can not is empty!");
        }
        if (!isPositive(dto.getValue())) {
            addErrors("value", "Value can not is empty!");
        }
        if (isNull(dto.getPaymentType())) {
            addErrors("idPaymentType", "Payment Type can not is empty!");
        }
        if (isNull(dto.getExpenseCategory())) {
            addErrors("idExpenseCategory", "Expense Category must is informed!");
        }
        if (isNull(dto.getPerson())) {
            addErrors("idPerson", "Person must is informed!");
        }
        if (isNull(dto.getWallet())) {
            addErrors("idWallet", "Wallet must is informed!");
        }
    }

    @Override
    public void validObject(Expense ob) {
        Double payValue = ob.getPayments().stream().mapToDouble(v -> v.getValue()).sum();
        if (ob.getValue() - payValue < 0) {
            addErrors("value", "Pay value can not is bigger than Value Expense!");
        }
    }

    @Override
    public void validDelete(Expense ob) {
        if (!ob.getPayments().isEmpty()) {
            addErrors("", "Expense has payments!");
        }
    }

}
