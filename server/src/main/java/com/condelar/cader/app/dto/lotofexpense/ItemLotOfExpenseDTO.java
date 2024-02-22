package com.condelar.cader.app.dto.lotofexpense;

import com.condelar.cader.app.entiti.ItemLotOfExpense;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

import java.time.LocalDate;

@Data
public class ItemLotOfExpenseDTO extends BaseDTO {

    private Long idExpense;
    private LocalDate dueDate;
    private Double value  = 0D;
    private Double amountPaid = 0D;
    private Double openValue = 0D;
    private Integer number = 1;

    public ItemLotOfExpenseDTO() {
    }

    public ItemLotOfExpenseDTO(ItemLotOfExpense ob) {
        super(ob);
        setValue(ob.getExpense().getValue());
        Double amountPaid = ob.getExpense().getPayments().stream().mapToDouble(m -> m.getValue()).sum();
        setOpenValue(ob.getExpense().getValue() - amountPaid);
        setAmountPaid(amountPaid);
        setDueDate(ob.getExpense().getDueDate());
        setIdExpense(ob.getExpense().getId());
        setNumber(ob.getNumber());

    }
}
