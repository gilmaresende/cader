package com.condelar.cader.app.dto.card;

import com.condelar.cader.app.entiti.Card;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

@Data
public class CardListDTO extends BaseDTO {

    private String name;

    private Short active;

    public CardListDTO() {
    }

    public CardListDTO(Card ob) {
        super(ob);
    }

}
