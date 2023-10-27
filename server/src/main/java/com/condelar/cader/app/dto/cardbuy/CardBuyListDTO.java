package com.condelar.cader.app.dto.cardbuy;

import com.condelar.cader.app.entiti.CardBuy;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

@Data
public class CardBuyListDTO extends BaseDTO {

    public CardBuyListDTO() {
    }

    public CardBuyListDTO(CardBuy ob) {
        super(ob);
    }

}

