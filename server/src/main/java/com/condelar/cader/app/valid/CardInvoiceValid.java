package com.condelar.cader.app.valid;

import com.condelar.cader.app.dto.cardinvoice.CardInvoiceDTO;
import com.condelar.cader.app.entiti.CardInvoice;
import com.condelar.cader.core.structure.BaseValid;
import org.springframework.stereotype.Component;

public class CardInvoiceValid extends BaseValid<CardInvoiceDTO, CardInvoice> {

    @Override
    public void validDtoToSave(CardInvoiceDTO dto) {
        findLaunches(dto);
        if (isNull(dto.getLaunches()) || dto.getLaunches().isEmpty()) {
            addErrors("launches", "Launches must be loading.");
        }
        if (isNull(dto.getDueDate())) {
            addErrors("dueDate", "Due date must be informed.");
        }

    }

    @Override
    public void validObject(CardInvoice ob) {

    }

    @Override
    public void validDelete(CardInvoice ob) {

    }

    @Override
    public void validUpdate(Long id, CardInvoiceDTO dto) {
        addErrors("cardInvoice", "Card Invoice can not be updated.");
    }

    public void findLaunches(CardInvoiceDTO cardInvoiceDTO) {
        if (isNull(cardInvoiceDTO.getCard())) {
            addErrors("card", "Card must be informed.");
        }
        if (isNull(cardInvoiceDTO.getClosedDate())) {
            addErrors("closedDate", "Closed date must be informed.");
        }
    }
}

