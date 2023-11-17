package com.condelar.cader.app.valid;

import com.condelar.cader.app.dto.cardinvoice.CardInvoiceDTO;
import com.condelar.cader.app.entiti.CardInvoice;
import com.condelar.cader.core.structure.BaseValid;
import org.springframework.stereotype.Component;

@Component
public class CardInvoiceValid extends BaseValid<CardInvoiceDTO, CardInvoice> {

    @Override
    public void validDtoToSave(CardInvoiceDTO dto) {

    }

    @Override
    public void validObject(CardInvoice ob) {

    }

    @Override
    public void validDelete(CardInvoice ob) {

    }

    public void findLaunches(CardInvoiceDTO cardInvoiceDTO) {
        if (isNull(cardInvoiceDTO.getCard())) {
            addErrors("card", "Card must be informate.");
        }
        if (isNull(cardInvoiceDTO.getClosedDate())) {
            addErrors("closedDate", "Closed Date must be informate.");
        }
    }
}

