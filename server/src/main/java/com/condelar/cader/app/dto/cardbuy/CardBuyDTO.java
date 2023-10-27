package com.condelar.cader.app.dto.cardbuy;

import com.condelar.cader.app.entiti.CardBuy;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

@Data
public class CardBuyDTO extends BaseDTO {

    public CardBuyDTO() {
    }

    public CardBuyDTO(CardBuy ob) {
        super(ob);
    }

}

