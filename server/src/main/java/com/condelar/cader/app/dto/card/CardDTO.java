package com.condelar.cader.app.dto.card;

import com.condelar.cader.app.domain.Card;
import com.condelar.cader.base.structure.BaseDTO;
import lombok.Data;

@Data
public class CardDTO extends BaseDTO {

    private String name;

    private Short active;

    private Long idPerson;

    private Long idPaymentType;

    private Long idExpenseCategoryBuyCard;

    public CardDTO() {
    }

    public CardDTO(Card ob) {
        super(ob);
    }

}
