package com.condelar.cader.app.dto.expense;

import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

import java.time.LocalDate;

@Data
public class ExpenseFilterDTO extends BaseDTO {

    private LocalDate dueDateStart;
    private LocalDate dueDateEnd;
    private DescriptionId origin;
    private DescriptionId status;
    private DescriptionId wallet;
    private DescriptionId paymentType;
    private DescriptionId person;
    private DescriptionId expenseCategory;


    public ExpenseFilterDTO() {
    }
}
