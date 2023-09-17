package com.condelar.cader.app.valid;

import com.condelar.cader.app.domain.Expense;
import com.condelar.cader.app.dto.expense.ExpenseDTO;
import com.condelar.cader.core.structure.BaseValid;
import org.springframework.stereotype.Component;

@Component
public class ExpenseValid extends BaseValid<ExpenseDTO, Expense> {

    @Override
    public void validDtoToSave(ExpenseDTO dto) {

    }

    @Override
    public void validObject(Expense ob) {

    }

    @Override
    public void validDelete(Expense ob) {

    }
}