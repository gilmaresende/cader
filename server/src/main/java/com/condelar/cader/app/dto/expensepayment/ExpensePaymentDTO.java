package com.condelar.cader.app.dto.expensepayment;

import com.condelar.cader.app.entiti.ExpensePayment;
import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

import java.time.LocalDate;

@Data
public class ExpensePaymentDTO extends BaseDTO {
    Long idExpense;
    DescriptionId wallet;
    DescriptionId paymentType;
    Double value;
    LocalDate payDay;
    String observation;

    public ExpensePaymentDTO() {
    }

    public ExpensePaymentDTO(ExpensePayment ob) {
        super(ob);
        setIdExpense(ob.getExpense().getId());
        setWallet(ob.getWallet().getDescriptionId());
        setPaymentType(ob.getPaymentType().getDescriptionId());
        setPayDay(ob.getPayDay());
        setValue(ob.getValue());
        setObservation(ob.getObservation());
    }

}
