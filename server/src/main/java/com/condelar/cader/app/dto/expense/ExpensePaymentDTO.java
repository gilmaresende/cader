package com.condelar.cader.app.dto.expense;

import com.condelar.cader.app.entiti.ExpensePayment;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

import java.time.LocalDate;

@Data
public class ExpensePaymentDTO extends BaseDTO {
    Long idExpense;
    Long idWallet;
    Long idPaymentType;
    Double value;
    LocalDate payDay;
    String observation;

    public ExpensePaymentDTO() {
    }

    public ExpensePaymentDTO(ExpensePayment ob) {
        super(ob);
        setIdExpense(ob.getExpense().getId());
        setIdWallet(ob.getWallet().getId());
        setIdPaymentType(ob.getPaymentType().getId());
        setPayDay(ob.getPayDay());
        setValue(ob.getValue());
        setObservation(ob.getObservation());
    }

}
