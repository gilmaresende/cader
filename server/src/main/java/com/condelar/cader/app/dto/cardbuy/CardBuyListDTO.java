package com.condelar.cader.app.dto.cardbuy;

import com.condelar.cader.app.entiti.CardBuy;
import com.condelar.cader.core.structure.BaseDTO;
import com.condelar.cader.tool.formatter.ToolReais;
import lombok.Data;

@Data
public class CardBuyListDTO extends BaseDTO {

    private String description;

    private String value;

    private String buyDate;

    private String card;


    public CardBuyListDTO() {
    }

    public CardBuyListDTO(CardBuy ob) {
        super(ob);
        setValue(ToolReais.toReais(ob.getValue()));
        setBuyDate(ob.getBuyDate().toString());
        setCard(ob.getCard().getName());
    }

}

