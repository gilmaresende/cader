package com.condelar.cader.app.services;

import com.condelar.cader.app.dto.cardinvoice.CardInvoiceDTO;
import com.condelar.cader.app.dto.cardinvoice.CardInvoiceFilterDTO;
import com.condelar.cader.app.dto.cardinvoice.CardInvoiceLaunchDTO;
import com.condelar.cader.app.dto.cardinvoice.CardInvoiceListDTO;
import com.condelar.cader.app.entiti.CardBuy;
import com.condelar.cader.app.entiti.CardBuyLaunch;
import com.condelar.cader.app.entiti.CardInvoice;
import com.condelar.cader.app.repositories.CardInvoiceRepository;
import com.condelar.cader.app.valid.CardInvoiceValid;
import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.structure.BaseService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CardInvoiceService extends BaseService<CardInvoice, CardInvoiceDTO, CardInvoiceFilterDTO, CardInvoiceListDTO, CardInvoiceRepository, CardInvoiceValid> {

    private final CardBuyService cardBuyService;

    private final CardService cardService;

    private final ExpenseService expenseService;

    @Override
    public CardInvoice instance() {
        return new CardInvoice();
    }

    @Override
    public CardInvoice toEntity(CardInvoice ob, CardInvoiceDTO dto) {
        ob.setCard(cardService.getById(dto.getCard().getId()));
        ob.setClosedDate(dto.getClosedDate());
        ob.setDueDate(dto.getDueDate());
        ob.getLaunches().clear();
        dto.getLaunches().forEach(launchDto -> ob.getLaunches().add(cardBuyService.getLauchesById(launchDto.getId())));
        return ob;
    }

    @Override
    public CardInvoiceDTO toDTO(CardInvoice ob) {
        return new CardInvoiceDTO(ob);
    }

    @Override
    public List<CardInvoice> filter(CardInvoiceFilterDTO ob) {
        return getRepo().getFilter(ob.getClosedDateStart(),
                ob.getClosedDateEnd(),
                ob.getDueDateStart(),
                ob.getDueDateEnd(),
                DescriptionId.getIdLong(ob.getCard()),
                getUser().getId());
    }

    @Override
    public CardInvoiceListDTO toListItem(CardInvoice ob) {
        return new CardInvoiceListDTO(ob);
    }

    public CardInvoiceDTO findLaunches(CardInvoiceDTO cardInvoiceDTO) {
        List<CardBuyLaunch> launches = cardBuyService.getLauchesForInvoice(cardInvoiceDTO.getCard().getId(), cardInvoiceDTO.getClosedDate());
        List<CardBuy> cardBuyList = new ArrayList<>();
        List<CardBuyLaunch> launchesResponse = new ArrayList<>();
        launches.forEach(launch -> {
            if (!cardBuyList.contains(launch.getCardBuy())) {
                cardBuyList.add(launch.getCardBuy());
                launchesResponse.add(launch);
            }
        });
        cardInvoiceDTO.setLaunches(launchesResponse.stream().map(m -> new CardInvoiceLaunchDTO(m)).toList());
        cardInvoiceDTO.setValueLaunches(launchesResponse.stream().mapToDouble(m -> m.getValue()).sum());
        cardInvoiceDTO.setValue(cardInvoiceDTO.getValueLaunches());
        cardInvoiceDTO.setDueDate(cardInvoiceDTO.getDueDate());
        cardInvoiceDTO.setRefundValue(0D);
        return cardInvoiceDTO;
    }

    @Override
    public CardInvoice beforeSave(CardInvoice ob) {
        ob.getLaunches().forEach(launch -> launch.setCardInvoice(ob));
        ob.setValueLaunches(ob.getLaunches().stream().mapToDouble(m -> m.getValue()).sum());
        ob.setValue(ob.getValueLaunches());
        ob.setRefundValue(0d);
        ob.setExpense(expenseService.buildExpenseByCardInvoice(ob));
        return ob;
    }

    @Override
    @Transactional
    public CardInvoice beforeDelete(CardInvoice ob) {
        ob.getLaunches().forEach(launch -> launch.setCardInvoice(null));
        ob = getRepo().saveAndFlush(ob);
        ob.getLaunches().clear();
        return super.beforeDelete(ob);
    }
}
