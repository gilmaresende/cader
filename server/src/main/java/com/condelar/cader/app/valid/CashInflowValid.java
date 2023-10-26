package com.condelar.cader.app.valid;

import com.condelar.cader.app.dto.cashinflow.CashInflowDTO;
import com.condelar.cader.app.entiti.CashInflow;
import com.condelar.cader.core.structure.BaseValid;
import org.springframework.stereotype.Component;

@Component
public class CashInflowValid extends BaseValid<CashInflowDTO, CashInflow> {

    @Override
    public void validDtoToSave(CashInflowDTO dto) {
       
    }

    @Override
    public void validObject(CashInflow ob) {

    }

    @Override
    public void validDelete(CashInflow ob) {

    }

    public void validPreviewNewPayment(CashInflow ob) {
        Double payValue = ob.getPayments().stream().mapToDouble(v -> v.getValue()).sum();
        if (ob.getValueTotal() - payValue <= 0) {
            addErrors("value", "Expense is closed!");
        }
    }
}

