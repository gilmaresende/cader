package com.condelar.cader.app.dto.expensepayment;

import com.condelar.cader.app.entiti.ExpensePayment;
import com.condelar.cader.core.structure.BaseDTO;
import com.condelar.cader.tool.formatter.ToolReais;
import lombok.Data;

@Data
public class ExpensePaymentListDTO extends BaseDTO {
    String wallet;
    String paymentType;
    String value;
    String payDay;

    public ExpensePaymentListDTO() {
    }

    public ExpensePaymentListDTO(ExpensePayment ob) {
        super(ob);
        setWallet(ob.getWallet().getName());
        setPaymentType(ob.getPaymentType().getName());
        setPayDay(ob.getPayDay().toString());
        setValue(ToolReais.toReais(ob.getValue()));
    }

}
