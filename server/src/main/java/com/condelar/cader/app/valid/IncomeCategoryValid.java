package com.condelar.cader.app.valid;

import com.condelar.cader.app.domain.IncomeCategory;
import com.condelar.cader.app.dto.incomecategory.IncomeCategoryDTO;
import com.condelar.cader.base.structure.BaseValid;
import org.springframework.stereotype.Component;

@Component
public class IncomeCategoryValid extends BaseValid<IncomeCategoryDTO, IncomeCategory> {

    @Override
    public void validDtoToSave(IncomeCategoryDTO dto) {
        if (isEmpty(dto.getName())) {
            addErrors("name", "The filed name can not be empty!");
        }
    }

    @Override
    public void validObject(IncomeCategory ob) {

    }

    @Override
    public void validDelete(IncomeCategory ob) {

    }
}
