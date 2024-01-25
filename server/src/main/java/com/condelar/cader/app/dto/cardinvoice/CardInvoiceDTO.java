package com.condelar.cader.app.dto.cardinvoice;

import com.condelar.cader.app.entiti.CardInvoice;
import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
public class CardInvoiceDTO extends BaseDTO {

    private LocalDate closedDate;

    private LocalDate dueDate;

    private Double value;

    private Double refundValue;

    private Double valueLaunches;

    private List<CardInvoiceLaunchDTO> launches = new ArrayList<>();

    private DescriptionId card;

    public CardInvoiceDTO() {
    }

    public CardInvoiceDTO(CardInvoice ob) {
        super(ob);
        setCard(ob.getCard().getDescriptionId());
        setLaunches(ob.getLaunches().stream().map(m -> new CardInvoiceLaunchDTO(m)).toList());
    }

}

