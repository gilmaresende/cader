package com.condelar.cader.app.dto.cashinflow;

import com.condelar.cader.app.entiti.CashInflowPayment;
import com.condelar.cader.core.structure.BaseDTO;
import com.condelar.cader.tool.formatter.ToolReais;
import lombok.Data;

@Data
public class CashInflowPaymentListDTO extends BaseDTO {

    String wallet;
    String paymentType;
    String value;
    String payDay;

    public CashInflowPaymentListDTO() {
    }

    public CashInflowPaymentListDTO(CashInflowPayment ob) {
        super(ob);
        setWallet(ob.getWallet().getName());
        setPaymentType(ob.getPaymentType().getName());
        setPayDay(ob.getPayDay().toString());
        setValue(ToolReais.toReais(ob.getValue()));
    }

}

