package com.condelar.cader.app.dto.cardbuy;

import com.condelar.cader.app.entiti.CardBuy;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

@Data
public class CardBuyFilterDTO extends BaseDTO {

    public CardBuyFilterDTO() {
    }

    public CardBuyFilterDTO(CardBuy ob) {
        super(ob);
    }

}

