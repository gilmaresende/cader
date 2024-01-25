package com.condelar.cader.app.dto.cashinflowpayment;

import com.condelar.cader.app.entiti.CashInflowPayment;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

@Data
public class CashInflowPaymentFilterDTO extends BaseDTO {

    public CashInflowPaymentFilterDTO() {
    }

    public CashInflowPaymentFilterDTO(CashInflowPayment ob) {
        super(ob);
    }

}

