package com.condelar.cader.app.dto.expense;

import com.condelar.cader.app.domain.ExpensePayment;
import com.condelar.cader.core.structure.BaseDTO;
import com.condelar.cader.tool.formatter.ToolReais;
import lombok.Data;

import java.time.LocalDate;
import java.util.Date;

@Data
public class ExpensePaymentDTO extends BaseDTO {
    Long idWallet;
    Long idPaymentType;
    Double value;
    LocalDate payDay;
    String observation;

    public ExpensePaymentDTO() {
    }

    public ExpensePaymentDTO(ExpensePayment ob) {
        super(ob);
        setIdWallet(ob.getWallet().getId());
        setIdPaymentType(ob.getPaymentType().getId());
        setPayDay(ob.getPayDay());
        setValue(ob.getValue());
        setObservation(ob.getObservation());
    }

}
