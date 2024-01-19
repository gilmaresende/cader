package com.condelar.cader.app.valid;

import com.condelar.cader.app.dto.cardbuy.CardBuyDTO;
import com.condelar.cader.app.dto.cardbuy.CardBuyLaunchDTO;
import com.condelar.cader.app.entiti.CardBuy;
import com.condelar.cader.core.structure.BaseValid;
import org.springframework.stereotype.Component;

public class CardBuyValid extends BaseValid<CardBuyDTO, CardBuy> {

    @Override
    public void validDtoToSave(CardBuyDTO dto) {
        validBuildLaunches(dto);

        if (isEmpty(dto.getDescription())) {
            addErrors("description", "Description must be informate.");
        }

        if (isNull(dto.getCard())) {
            addErrors("card", "Card must be informate.");
        }

        if (isNull(dto.getExpenseCategory())) {
            addErrors("expenseCategory", "Expense Category must be informate.");
        }

        if (isNull(dto.getLaunches()) || dto.getLaunches().isEmpty()) {
            addErrors("launches", "Calculate launches is obligatory.");
        } else {
            for (CardBuyLaunchDTO l : dto.getLaunches()) {
                if (!isPositive(l.getValue())) {
                    addErrors("launches.value", "Value launch must be positive.");
                }
                if (isNull(l.getDateLaunch())) {
                    addErrors("launches.dateLaunch", "Buy date launch must be informate.");
                }
            }
        }
    }

    @Override
    public void validObject(CardBuy ob) {

    }

    @Override
    public void validDelete(CardBuy ob) {

    }

    public void validBuildLaunches(CardBuyDTO e) {
        if (!isPositive(e.getValue())) {
            addErrors("value", "Value must be positive.");
        }

        if (!isPositive(e.getLaunchesNumber())) {
            addErrors("launchesNumber", "Number os launches must be positive.");
        }

        if (isNull(e.getBuyDate())) {
            addErrors("buyDate", "Buy date must be informate.");
        }
    }

}

