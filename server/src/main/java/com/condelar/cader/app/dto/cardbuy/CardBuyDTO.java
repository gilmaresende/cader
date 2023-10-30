package com.condelar.cader.app.dto.cardbuy;

import com.condelar.cader.app.entiti.CardBuy;
import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class CardBuyDTO extends BaseDTO {

    private String description;

    private Double value;

    private Integer launchesNumber;

    private LocalDate buyDate;

    private DescriptionId expenseCategory;

    private DescriptionId card;

    private List<CardBuyLaunchDTO> launches;

    private Short canceled;

    public CardBuyDTO() {
    }

    public CardBuyDTO(CardBuy ob) {
        super(ob);
        setExpenseCategory(ob.getExpenseCategory().getDescriptionId());
        setCard(ob.getCard().getDescriptionId());
        setLaunches(ob.getLaunches().stream().map(m -> new CardBuyLaunchDTO(m)).toList());
    }

}

