package com.condelar.cader.app.dto.expensecategory;

import com.condelar.cader.app.domain.ExpenseCategory;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

@Data
public class ExpenseCategoryDTO extends BaseDTO {

    private String name;

    private Short active;

    public ExpenseCategoryDTO() {
    }

    public ExpenseCategoryDTO(ExpenseCategory ob) {
        super(ob);
    }

}
