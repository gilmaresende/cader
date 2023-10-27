package com.condelar.cader.app.dto.cardbuy;

import com.condelar.cader.app.entiti.CardBuyLaunch;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

@Data
public class CardBuyLaunchDTO extends BaseDTO {

    public CardBuyLaunchDTO() {
    }

    public CardBuyLaunchDTO(CardBuyLaunch ob) {
        super(ob);
    }

}

