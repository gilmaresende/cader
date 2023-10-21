package com.condelar.cader.app.dto.cashinflow;

import com.condelar.cader.app.entiti.CashInflow;
import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

import java.time.LocalDate;

@Data
public class CashInflowDTO extends BaseDTO {

    private String description;

    private LocalDate openingDate;

    private LocalDate dueDate;

    private DescriptionId wallet;

    private DescriptionId paymentType;

    private DescriptionId person;

    private DescriptionId incomeCategory;

    private Double amountPaid;

    private Double openValue;

    private Double valueTotal;

    private String observation;

    private Short origin;

    private Short status;

    public CashInflowDTO() {
    }

    public CashInflowDTO(CashInflow ob) {
        super(ob);
    }

}

