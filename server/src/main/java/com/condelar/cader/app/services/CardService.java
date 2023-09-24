package com.condelar.cader.app.services;

import com.condelar.cader.app.constants.enuns.EnumYesNo;
import com.condelar.cader.app.domain.Card;
import com.condelar.cader.app.dto.card.CardDTO;
import com.condelar.cader.app.dto.card.CardFilterDTO;
import com.condelar.cader.app.dto.card.CardListDTO;
import com.condelar.cader.app.repositories.CardRepository;
import com.condelar.cader.app.valid.CardValid;
import com.condelar.cader.core.domain.User;
import com.condelar.cader.core.structure.BaseService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CardService extends BaseService<Card, CardDTO, CardFilterDTO, CardListDTO, CardRepository, CardValid> {

    private final PersonService personService;

    private final PaymentTypeService paymentTypeService;

    private final ExpenseCategoryService expenseCategoryService;

    private final WalletService walletService;

    @Override
    public Card instance() {
        return new Card();
    }

    @Override
    public Card toEntity(Card ob, CardDTO dto) {
        ob.setName(dto.getName());
        ob.setActive(EnumYesNo.valueOf(dto.getActive()).getValue());
        ob.setPersonExpense(personService.getById(dto.getPersonExpense().getId()));
        ob.setPaymentTypeExpense(paymentTypeService.getById(dto.getPaymentType().getId()));
        ob.setExpenseCategoryBuyCard(expenseCategoryService.getById(dto.getExpenseCategoryBuyCard().getId()));
        ob.setWalletExpense(walletService.getById(dto.getWalletExpense().getId()));
        return ob;
    }

    @Override
    public CardDTO toDTO(Card ob) {
        return new CardDTO(ob);
    }

    @Override
    public List<Card> filter(CardFilterDTO ob, User user) {
        return null;
    }


    @Override
    public CardListDTO toListItem(Card ob) {
        return new CardListDTO(ob);
    }
}
