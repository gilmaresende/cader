package com.condelar.cader.app.dto.card;

import com.condelar.cader.app.domain.Card;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

@Data
public class CardDTO extends BaseDTO {

    private String name;

    private Short active;

    private Long idPersonExpense;

    private Long idPaymentType;

    private Long idExpenseCategoryBuyCard;

    private Long idWalletExpense;

    public CardDTO() {
    }

    public CardDTO(Card ob) {
        super(ob);
        setIdPersonExpense(ob.getPersonExpense().getId());
        setIdPaymentType(ob.getPaymentTypeExpense().getId());
        setIdExpenseCategoryBuyCard(ob.getExpenseCategoryBuyCard().getId());
        setIdWalletExpense(ob.getWalletExpense().getId());
    }

}
