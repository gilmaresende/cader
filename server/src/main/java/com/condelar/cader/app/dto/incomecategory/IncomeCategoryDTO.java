package com.condelar.cader.app.dto.incomecategory;

import com.condelar.cader.app.entiti.IncomeCategory;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

@Data
public class IncomeCategoryDTO extends BaseDTO {

    private String name;

    private Short active;

    public IncomeCategoryDTO() {
    }

    public IncomeCategoryDTO(IncomeCategory ob) {
        super(ob);
    }

}
