package com.condelar.cader.app.dto.card;

import com.condelar.cader.app.entiti.Card;
import com.condelar.cader.core.structure.BaseDTO;
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
