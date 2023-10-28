package com.condelar.cader.app.dto.cardbuy;

import com.condelar.cader.app.entiti.CardBuyLaunch;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

import java.time.LocalDate;

@Data
public class CardBuyLaunchDTO extends BaseDTO {

    LocalDate dateLaunch;

    Double value;

    Integer number;

    public CardBuyLaunchDTO() {
    }

    public CardBuyLaunchDTO(CardBuyLaunch ob) {
        super(ob);
    }

}

