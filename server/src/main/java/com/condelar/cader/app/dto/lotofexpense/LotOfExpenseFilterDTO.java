package com.condelar.cader.app.dto.lotofexpense;

import com.condelar.cader.app.entiti.LotOfExpense;
import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

import java.time.LocalDate;

@Data
public class LotOfExpenseFilterDTO extends BaseDTO {

    private LocalDate dueDateStart;
    private LocalDate dueDateEnd;
    private DescriptionId wallet;
    private DescriptionId paymentType;
    private DescriptionId person;
    private DescriptionId expenseCategory;

    public LotOfExpenseFilterDTO() {
    }

    public LotOfExpenseFilterDTO(LotOfExpense ob) {
        super(ob);
    }

}

