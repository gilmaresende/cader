package com.condelar.cader.app.dto.expense;

import com.condelar.cader.app.domain.*;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class ExpenseDTO extends BaseDTO {

    private String description;

    private Short status;

    private LocalDate dueDate;

    private Short origin;

    private Double value;

    private Double openValue;

    private Double amountPaid;

    private Long idExpenseCategory;

    private Long idPaymentType;

    private Long idWallet;

    private Long idPerson;

    private List<ExpensePaymentListDTO> payments = new ArrayList<>();


    public ExpenseDTO() {
    }

    public ExpenseDTO(Expense ob) {
        super(ob);
        setIdExpenseCategory(ob.getExpenseCategory().getId());
        setIdPaymentType(ob.getPaymentType().getId());
        setIdWallet(ob.getWallet().getId());
        setIdPerson(ob.getPerson().getId());
        setAmountPaid(ob.getPayments().stream().mapToDouble(m -> m.getValue()).sum());
        setOpenValue(getValue() - getAmountPaid());
        setPayments(ob.getPayments().stream().map(m -> new ExpensePaymentListDTO(m)).collect(Collectors.toList()));

    }

}
