package com.condelar.cader.app.dto.cardinvoice;

import com.condelar.cader.app.entiti.CardInvoice;
import com.condelar.cader.core.structure.BaseDTO;
import com.condelar.cader.tool.formatter.ToolReais;
import lombok.Data;

@Data
public class CardInvoiceListDTO extends BaseDTO {

    private String card;

    private String dueDate;

    private String value;

    public CardInvoiceListDTO() {
    }

    public CardInvoiceListDTO(CardInvoice ob) {
        super(ob);
        setCard(ob.getCard().getName());
        setDueDate(ob.getDueDate().toString());
        setValue(ToolReais.toReais(ob.getValue()));
    }

}

