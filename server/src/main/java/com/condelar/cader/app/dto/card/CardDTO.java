package com.condelar.cader.app.dto.card;

import com.condelar.cader.app.entiti.Card;
import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

@Data
public class CardDTO extends BaseDTO {

    private String name;

    private Short active;

    private DescriptionId personExpense;

    private DescriptionId paymentType;

    private DescriptionId expenseCategoryBuyCard;

    private DescriptionId walletExpense;

    public CardDTO() {
    }

    public CardDTO(Card ob) {
        super(ob);
        setPersonExpense(ob.getPersonExpense().getDescriptionId());
        setPaymentType(ob.getPaymentTypeExpense().getDescriptionId());
        setExpenseCategoryBuyCard(ob.getExpenseCategoryBuyCard().getDescriptionId());
        setWalletExpense(ob.getWalletExpense().getDescriptionId());
    }

}
