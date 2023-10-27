package com.condelar.cader.app.services;

import com.condelar.cader.app.dto.cardbuy.CardBuyDTO;
import com.condelar.cader.app.dto.cardbuy.CardBuyFilterDTO;
import com.condelar.cader.app.dto.cardbuy.CardBuyListDTO;
import com.condelar.cader.app.entiti.CardBuy;
import com.condelar.cader.app.repositories.CardBuyRepository;
import com.condelar.cader.app.valid.CardBuyValid;
import com.condelar.cader.core.structure.BaseService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CardBuyService extends BaseService<CardBuy, CardBuyDTO, CardBuyFilterDTO, CardBuyListDTO, CardBuyRepository, CardBuyValid> {

    @Override
    public CardBuy instance() {
        return new CardBuy();
    }

    @Override
    public CardBuy toEntity(CardBuy ob, CardBuyDTO dto) {

        return ob;
    }

    @Override
    public CardBuyDTO toDTO(CardBuy ob) {
        return new CardBuyDTO(ob);
    }

    @Override
    public List<CardBuy> filter(CardBuyFilterDTO ob) {
        return null;
    }

    @Override
    public CardBuyListDTO toListItem(CardBuy ob) {
        return new CardBuyListDTO(ob);
    }
}

