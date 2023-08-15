package com.condelar.cader.app.dto.card;

import com.condelar.cader.app.domain.Card;
import com.condelar.cader.app.domain.Person;
import com.condelar.cader.base.structure.BaseDTO;
import lombok.Data;

@Data
public class CardFilterDTO extends BaseDTO {

    private String name;

    private Short active;

    public CardFilterDTO() {
    }

    public CardFilterDTO(Card ob) {
        super(ob);
    }

}
