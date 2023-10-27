package com.condelar.cader.app.valid;

import com.condelar.cader.app.dto.cardbuy.CardBuyDTO;
import com.condelar.cader.app.entiti.CardBuy;
import com.condelar.cader.core.structure.BaseValid;
import org.springframework.stereotype.Component;

@Component
public class CardBuyValid extends BaseValid<CardBuyDTO, CardBuy> {

    @Override
    public void validDtoToSave(CardBuyDTO dto) {
       
    }

    @Override
    public void validObject(CardBuy ob) {

    }

    @Override
    public void validDelete(CardBuy ob) {

    }
}

