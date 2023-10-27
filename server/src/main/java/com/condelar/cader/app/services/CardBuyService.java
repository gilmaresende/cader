package com.condelar.cader.app.services;

import com.condelar.cader.app.dto.cardbuy.CardBuyDTO;
import com.condelar.cader.app.dto.cardbuy.CardBuyFilterDTO;
import com.condelar.cader.app.dto.cardbuy.CardBuyListDTO;
import com.condelar.cader.app.entiti.CardBuy;
import com.condelar.cader.app.repositories.CardBuyRepository;
import com.condelar.cader.app.valid.CardBuyValid;
import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.structure.BaseService;
import com.condelar.cader.tool.entity.ToolEntity;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CardBuyService extends BaseService<CardBuy, CardBuyDTO, CardBuyFilterDTO, CardBuyListDTO, CardBuyRepository, CardBuyValid> {

    private final CardService cardService;

    private final ExpenseCategoryService expenseCategoryService;

    @Override
    public CardBuy instance() {
        return new CardBuy();
    }

    @Override
    public CardBuy toEntity(CardBuy ob, CardBuyDTO dto) {
        ToolEntity.cloneAttributes(dto, ob);
        ob.setCard(cardService.getById(dto.getCard().getId()));
        ob.setExpenseCategory(expenseCategoryService.getById(dto.getExpenseCategory().getId()));
        createUpdateLaunches(ob, dto);
        return ob;
    }

    private void createUpdateLaunches(CardBuy ob, CardBuyDTO dto) {
    }

    @Override
    public CardBuyDTO toDTO(CardBuy ob) {
        return new CardBuyDTO(ob);
    }

    @Override
    public List<CardBuy> filter(CardBuyFilterDTO ob) {
         return getRepo().getFilter();
    }

    @Override
    public CardBuyListDTO toListItem(CardBuy ob) {
        return new CardBuyListDTO(ob);
    }
}

