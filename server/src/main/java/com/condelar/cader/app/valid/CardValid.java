package com.condelar.cader.app.valid;

import com.condelar.cader.app.domain.Card;
import com.condelar.cader.app.dto.card.CardDTO;
import com.condelar.cader.base.structure.BaseValid;
import org.springframework.stereotype.Component;

@Component
public class CardValid extends BaseValid<CardDTO, Card> {

    @Override
    public void validDtoToSave(CardDTO dto) {
        if (isEmpty(dto.getName())) {
            addErrors("name", "The filed name can not be empty!");
        }
    }

    @Override
    public void validObject(Card ob) {

    }

    @Override
    public void validDelete(Card ob) {

    }
}
