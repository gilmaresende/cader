package com.condelar.cader.app.valid;

import com.condelar.cader.app.dto.lotofexpense.LotOfExpenseDTO;
import com.condelar.cader.app.entiti.LotOfExpense;
import com.condelar.cader.core.structure.BaseValid;
import org.springframework.stereotype.Component;

public class LotOfExpenseValid extends BaseValid<LotOfExpenseDTO, LotOfExpense> {

    @Override
    public void validDtoToSave(LotOfExpenseDTO dto) {

    }

    @Override
    public void validObject(LotOfExpense ob) {

    }

    @Override
    public void validDelete(LotOfExpense ob) {

    }

    public void previewExpenses(LotOfExpenseDTO lotOfExpenseDTO) {
        if (!isPositive(lotOfExpenseDTO.getValueBase())) {
            addErrors("valueBase", "Value must be informed!");
        }
        if (!isPositive(lotOfExpenseDTO.getAmount())) {
            addErrors("amount", "Amount must be informed!");
        }
        if (isNull(lotOfExpenseDTO.getFirstDue())) {
            addErrors("amount", "First Due must be informed!");
        }
    }
}

