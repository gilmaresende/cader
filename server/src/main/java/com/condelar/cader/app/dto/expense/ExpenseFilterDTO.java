package com.condelar.cader.app.dto.expense;

import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

import java.time.LocalDate;

@Data
public class ExpenseFilterDTO extends BaseDTO {

    private LocalDate dueDateStart;
    private LocalDate dueDateEnd;
    private Short status;
    private Long idWallet;
    private Long idPaymentType;
    private Long idPerson;
    private Long idExpenseCategory;


    public ExpenseFilterDTO() {
    }
}
