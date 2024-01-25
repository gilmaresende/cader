package com.condelar.cader.app.dto.cardinvoice;

import com.condelar.cader.app.entiti.CardBuyLaunch;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

import java.time.LocalDate;

@Data
public class CardInvoiceLaunchDTO extends BaseDTO {

    LocalDate dateLaunch;

    Double value;

    Integer number;

    String description;

    Integer amountLaunches;

    public CardInvoiceLaunchDTO() {
    }

    public CardInvoiceLaunchDTO(CardBuyLaunch ob) {
        super(ob);
        setDescription(ob.getCardBuy().getDescription());
        setAmountLaunches(ob.getCardBuy().getLaunchesNumber());
    }

}

