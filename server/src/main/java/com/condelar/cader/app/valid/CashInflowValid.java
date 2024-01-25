package com.condelar.cader.app.valid;

import com.condelar.cader.app.dto.cashinflow.CashInflowDTO;
import com.condelar.cader.app.entiti.CashInflow;
import com.condelar.cader.core.structure.BaseValid;
import org.springframework.stereotype.Component;

public class CashInflowValid extends BaseValid<CashInflowDTO, CashInflow> {

    @Override
    public void validDtoToSave(CashInflowDTO dto) {

        if (!hasContent(dto.getDescription())) {
            addErrors("description", "Descrition can not is empty!");
        }
        if (isNull(dto.getDueDate())) {
            addErrors("duaDate", "Due Date can not is empty!");
        }
        if (!isPositive(dto.getValueTotal())) {
            addErrors("valueTotal", "Value can not is empty!");
        }
        if (isNull(dto.getPaymentType())) {
            addErrors("idPaymentType", "Payment Type can not is empty!");
        }
        if (isNull(dto.getIncomeCategory())) {
            addErrors("incomeCategory", "Income Category must is informed!");
        }
        if (isNull(dto.getPerson())) {
            addErrors("idPerson", "Person must is informed!");
        }
        if (isNull(dto.getWallet())) {
            addErrors("idWallet", "Wallet must is informed!");
        }
        if (isNull(dto.getOpeningDate())) {
            addErrors("openingDate", "Opening Date must is informed!");
        }
    }

    @Override
    public void validObject(CashInflow ob) {
        Double payValue = ob.getPayments().stream().mapToDouble(v -> v.getValue()).sum();
        if (ob.getValueTotal() - payValue < 0) {
            addErrors("", "Value Payments is more that value total!");
        }
    }

    @Override
    public void validDelete(CashInflow ob) {

    }

}

