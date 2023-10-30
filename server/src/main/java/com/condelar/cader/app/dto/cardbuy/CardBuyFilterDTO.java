package com.condelar.cader.app.dto.cardbuy;

import com.condelar.cader.app.entiti.CardBuy;
import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

import java.time.LocalDate;

@Data
public class CardBuyFilterDTO extends BaseDTO {

    LocalDate buyDateStart;
    LocalDate buyDateEnd;
    LocalDate launchDateStart;
    LocalDate launchDateEnd;
    DescriptionId card;

    public CardBuyFilterDTO() {
    }

    public CardBuyFilterDTO(CardBuy ob) {
        super(ob);
    }

}

