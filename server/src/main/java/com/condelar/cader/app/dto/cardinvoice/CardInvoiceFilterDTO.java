package com.condelar.cader.app.dto.cardinvoice;

import com.condelar.cader.app.entiti.CardInvoice;
import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

import java.time.LocalDate;

@Data
public class CardInvoiceFilterDTO extends BaseDTO {

    private DescriptionId card;

    LocalDate closedDateStart;
    LocalDate closedDateEnd;
    LocalDate dueDateStart;
    LocalDate dueDateEnd;

    public CardInvoiceFilterDTO() {
    }

    public CardInvoiceFilterDTO(CardInvoice ob) {
        super(ob);
    }

}

