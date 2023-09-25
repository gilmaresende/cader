package com.condelar.cader.app.dto.expense;

import com.condelar.cader.app.entiti.*;
import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class ExpenseDTO extends BaseDTO {

    private String description;

    private LocalDate dueDate;

    private Double value;

    private Double openValue;

    private Double amountPaid;

    private DescriptionId origin;

    private DescriptionId status;

    private DescriptionId expenseCategory;

    private DescriptionId paymentType;

    private DescriptionId wallet;

    private DescriptionId person;

    private List<ExpensePaymentListDTO> payments = new ArrayList<>();

    public ExpenseDTO() {
    }

    public ExpenseDTO(Expense ob) {
        super(ob);
        setExpenseCategory(ob.getExpenseCategory().getDescriptionId());
        setPaymentType(ob.getPaymentType().getDescriptionId());
        setWallet(ob.getWallet().getDescriptionId());
        setPerson(ob.getPerson().getDescriptionId());
        setAmountPaid(ob.getPayments().stream().mapToDouble(m -> m.getValue()).sum());
        setOpenValue(getValue() - getAmountPaid());
        setPayments(ob.getPayments().stream().map(m -> new ExpensePaymentListDTO(m)).collect(Collectors.toList()));
    }

}
