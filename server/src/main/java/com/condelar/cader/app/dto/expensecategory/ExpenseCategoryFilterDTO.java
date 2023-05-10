package com.condelar.cader.app.dto.expensecategory;

import com.condelar.cader.app.constants.enuns.EnumYesNo;
import com.condelar.cader.app.domain.Person;
import com.condelar.cader.base.structure.BaseDTO;
import lombok.Data;

@Data
public class ExpenseCategoryFilterDTO extends BaseDTO {

    private String name;

    private EnumYesNo active;

    public ExpenseCategoryFilterDTO() {
    }

    public ExpenseCategoryFilterDTO(Person ob) {
        setId(ob.getId());
        setName(ob.getName());
        setActive(EnumYesNo.valueOf(ob.getActive()));
    }

}
