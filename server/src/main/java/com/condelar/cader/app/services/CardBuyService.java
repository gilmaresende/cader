package com.condelar.cader.app.services;

import com.condelar.cader.app.constants.enuns.EnumYesNo;
import com.condelar.cader.app.dto.cardbuy.CardBuyDTO;
import com.condelar.cader.app.dto.cardbuy.CardBuyFilterDTO;
import com.condelar.cader.app.dto.cardbuy.CardBuyLaunchDTO;
import com.condelar.cader.app.dto.cardbuy.CardBuyListDTO;
import com.condelar.cader.app.entiti.CardBuy;
import com.condelar.cader.app.entiti.CardBuyLaunch;
import com.condelar.cader.app.repositories.CardBuyRepository;
import com.condelar.cader.app.valid.CardBuyValid;
import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.structure.BaseService;
import com.condelar.cader.tool.entity.ToolEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
        if (ob.getId() == null) {
            ToolEntity.cloneAttributes(dto, ob);
            ob.setCanceled(EnumYesNo.NO.getValue());
        } else {
            ob.setDescription(dto.getDescription());
            ob.setBuyDate(dto.getBuyDate());
            ob.setValue(dto.getValue());
        }
        ob.setCard(cardService.getById(dto.getCard().getId()));
        ob.setExpenseCategory(expenseCategoryService.getById(dto.getExpenseCategory().getId()));
        createUpdateLaunches(ob, dto);
        return ob;
    }

    private void createUpdateLaunches(CardBuy ob, CardBuyDTO dto) {
        List<CardBuyLaunch> launches = ob.getLaunches();
        if (launches.isEmpty()) {
            launches = createLaunches(dto);
        } else {
            launches = updateLaunches(ob, dto);
        }
        ob.setLaunches(launches);
    }

    private List<CardBuyLaunch> updateLaunches(CardBuy ob, CardBuyDTO dto) {
        List<CardBuyLaunch> launches = ob.getLaunches();
        List<CardBuyLaunch> launchesClone = new ArrayList<>();
        launchesClone.addAll(launches);
        launches.clear();
        dto.getLaunches().forEach(launchDto -> {
            Optional<CardBuyLaunch> launchOp = launchesClone.stream().filter(f -> f.getNumber().equals(launchDto.getNumber())).findFirst();
            CardBuyLaunch launch;
            if (launchOp.isPresent()) {
                launch = launchOp.get();
                ToolEntity.cloneAttributes(launchDto, launch);
            } else {
                launch = new CardBuyLaunch();
                ToolEntity.cloneAttributes(launchDto, launch);
            }
            launches.add(launch);
        });
        return launches;
    }

    private List<CardBuyLaunch> createLaunches(CardBuyDTO dto) {
        List<CardBuyLaunch> launches = new ArrayList<>();
        dto.getLaunches().forEach(launchDto -> {
            CardBuyLaunch launch = new CardBuyLaunch();
            ToolEntity.cloneAttributes(launchDto, launch);
            launches.add(launch);
        });
        return launches;
    }

    @Override
    public CardBuyDTO toDTO(CardBuy ob) {
        return new CardBuyDTO(ob);
    }

    @Override
    public List<CardBuy> filter(CardBuyFilterDTO ob) {
        return getRepo().getFilter(ob.getBuyDateStart(),
                ob.getBuyDateEnd(),
                DescriptionId.getIdLong(ob.getCard()),
                ob.getLaunchDateStart(),
                ob.getLaunchDateEnd(),
                getUser().getId());
    }

    @Override
    public CardBuyListDTO toListItem(CardBuy ob) {
        return new CardBuyListDTO(ob);
    }

    public CardBuyDTO preview(CardBuyDTO cardBuy) {
        LocalDate buyDate = cardBuy.getBuyDate();
        List<CardBuyLaunchDTO> launches = new ArrayList<>();
        Double launchValue = cardBuy.getValue() / cardBuy.getLaunchesNumber();
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

    @Override
    public CardBuy beforeSave(CardBuy ob) {
        ob.getLaunches().forEach(i -> {
            i.setCardBuy(ob);
            i.setUpdate(LocalDateTime.now());
            i.setUser(getUser());
            if (i.getId() == null) {
                i.setRegister(LocalDate.now());
            }
        });
        return super.beforeSave(ob);
    }

    public List<CardBuyLaunch> getLauchesForInvoice(Long idCard, LocalDate closedDate) {
        return getRepo().getLauchesForInvoice(idCard, closedDate, getUser().getId());
    }

    public CardBuyLaunch getLauchesById(Long id) {
        return getRepo().getLauchesById(id, getUser().getId());
    }
}

