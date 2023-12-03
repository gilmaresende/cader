package com.condelar.cader.app.dto.lotofexpense;

import com.condelar.cader.app.entiti.LotOfExpense;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

@Data
public class LotOfExpenseListDTO extends BaseDTO {

    public LotOfExpenseListDTO() {
    }

    public LotOfExpenseListDTO(LotOfExpense ob) {
        super(ob);
    }

}

