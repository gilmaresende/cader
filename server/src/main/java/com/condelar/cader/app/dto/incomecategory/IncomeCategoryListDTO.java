package com.condelar.cader.app.dto.incomecategory;

import com.condelar.cader.app.domain.IncomeCategory;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

@Data
public class IncomeCategoryListDTO extends BaseDTO {

    private String name;

    private Short active;

    public IncomeCategoryListDTO() {
    }

    public IncomeCategoryListDTO(IncomeCategory ob) {
        super(ob);
    }

}
