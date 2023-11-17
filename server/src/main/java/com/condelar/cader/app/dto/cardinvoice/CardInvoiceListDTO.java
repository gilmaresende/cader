package com.condelar.cader.app.dto.cardinvoice;

import com.condelar.cader.app.entiti.CardInvoice;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

@Data
public class CardInvoiceListDTO extends BaseDTO {

    public CardInvoiceListDTO() {
    }

    public CardInvoiceListDTO(CardInvoice ob) {
        super(ob);
    }

}

