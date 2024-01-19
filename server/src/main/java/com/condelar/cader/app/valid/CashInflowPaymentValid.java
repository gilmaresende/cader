package com.condelar.cader.app.valid;

import com.condelar.cader.app.dto.cashinflowpayment.CashInflowPaymentDTO;
import com.condelar.cader.app.entiti.CashInflow;
import com.condelar.cader.app.entiti.CashInflowPayment;
import com.condelar.cader.core.structure.BaseValid;

public class CashInflowPaymentValid extends BaseValid<CashInflowPaymentDTO, CashInflowPayment> {

    @Override
    public void validDtoToSave(CashInflowPaymentDTO dto) {

    }

    @Override
    public void validObject(CashInflowPayment ob) {
        Double payValue = ob.getCashInflow().getPayments().stream().mapToDouble(v -> v.getValue()).sum();
        if (ob.getValue() - payValue < 0) {
            addErrors("value", "Expense is closed!");
        }
    }

    @Override
    public void validDelete(CashInflowPayment ob) {

    }

    public void validPreviewNewPayment(CashInflow ob) {
        Double payValue = ob.getPayments().stream().mapToDouble(v -> v.getValue()).sum();
        if (ob.getValueTotal() - payValue <= 0) {
            addErrors("value", "Expense is closed!");
        }
    }
}

