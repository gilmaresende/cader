package com.condelar.cader.app.valid;

import com.condelar.cader.app.domain.ExpenseCategory;
import com.condelar.cader.app.dto.expensecategory.ExpenseCategoryDTO;
import com.condelar.cader.base.structure.BaseValid;
import org.springframework.stereotype.Component;

@Component
public class ExpenseCategoryValid extends BaseValid<ExpenseCategoryDTO, ExpenseCategory> {

    @Override
    public void validDtoToSave(ExpenseCategoryDTO dto) {
        if (isEmpty(dto.getName())) {
            addErrors("name", "The filed name can not be empty!");
        }
    }

    @Override
    public void validObject(ExpenseCategory ob) {

    }
}
