package com.condelar.cader.app.dto.cashinflowpayment;

import com.condelar.cader.app.entiti.CashInflowPayment;
import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

import java.time.LocalDate;

@Data
public class CashInflowPaymentDTO extends BaseDTO {

    Long idCashInflow;
    DescriptionId wallet;
    DescriptionId paymentType;
    Double value;
    LocalDate payDay;
    String observation;

    public CashInflowPaymentDTO() {
    }

    public CashInflowPaymentDTO(CashInflowPayment ob) {
        super(ob);
        setIdCashInflow(ob.getCashInflow().getId());
        setWallet(ob.getWallet().getDescriptionId());
        setPaymentType(ob.getPaymentType().getDescriptionId());
        setPayDay(ob.getPayDay());
        setValue(ob.getValue());
        setObservation(ob.getObservation());
    }

}

