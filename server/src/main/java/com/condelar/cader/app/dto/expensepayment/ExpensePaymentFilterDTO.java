package com.condelar.cader.app.dto.expensepayment;

import com.condelar.cader.app.entiti.ExpensePayment;
import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.structure.BaseDTO;
import com.condelar.cader.tool.formatter.ToolReais;
import lombok.Data;

import java.time.LocalDate;

@Data
public class ExpensePaymentFilterDTO extends BaseDTO {

    public ExpensePaymentFilterDTO() {
    }

    public ExpensePaymentFilterDTO(ExpensePayment ob) {
        super(ob);
    }

}

