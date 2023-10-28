package com.condelar.cader.app.services;

import com.condelar.cader.app.dto.cardbuy.CardBuyDTO;
import com.condelar.cader.app.dto.cardbuy.CardBuyFilterDTO;
import com.condelar.cader.app.dto.cardbuy.CardBuyLaunchDTO;
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

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import static com.condelar.cader.tool.util.ToolDate.getDayInNextMonth;
import static com.condelar.cader.tool.util.ToolNumber.roundDown;

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

    public CardBuyDTO preview(CardBuyDTO cardBuy) {
        LocalDate buyDate = cardBuy.getBuyDate();
        List<CardBuyLaunchDTO> launches = new ArrayList<>();
        Double launchValue = cardBuy.getValue() / cardBuy.getLaunchesNumber();//ToolFormatter.arredondarDow(e.getValor() / e.getNumeroParcelas(), 2);
        launchValue = roundDown(launchValue, 2);
        int dayBuy = buyDate.getDayOfMonth();
        for (int i = 0; i < cardBuy.getLaunchesNumber(); i++) {
            CardBuyLaunchDTO p = new CardBuyLaunchDTO();
            p.setNumber(i + 1);
            p.setValue(launchValue);
            p.setDateLaunch(buyDate);
            launches.add(p);
            buyDate = getDayInNextMonth(buyDate, dayBuy);
        }
        cardBuy.setLaunches(launches);
        Double distributedValue = launches.stream().mapToDouble(m -> m.getValue()).sum();
        Double difference = cardBuy.getValue() - distributedValue;
        launches.stream().findFirst().get().setValue(roundDown(difference + launchValue, 2));
        return cardBuy;
    }




/*
    public void criarLancamentos(CompraCartaoDTO dto, CompraCartao e) {
        dto.getLancamentos().forEach(i -> {
            LancamentoFaturaCartao l = new LancamentoFaturaCartao();
            l.setCompraCartao(e);
            l.setValor(i.getValor());
            l.setDataLancamento(i.getDataLancamento());
            e.getLancamentos().add(l);
        });
    }

    public void updateLancamentos(CompraCartaoDTO dto, CompraCartao e) {
        dto.getLancamentos().forEach(i -> {
            LancamentoFaturaCartao l = e.getLancamentos().stream().filter(f -> isEquals(f.getId(), i.getId())).findFirst().get();
            l.setDataLancamento(i.getDataLancamento());
            l.setValor(i.getValor());
        });
    }

 */
}

