package com.condelar.cader.app.dto.expense;

import com.condelar.cader.app.domain.Expense;
import com.condelar.cader.app.domain.Movement;
import com.condelar.cader.core.structure.BaseDTO;
import com.condelar.cader.tool.formatter.ToolReais;
import lombok.Data;

import java.time.LocalDate;

@Data
public class ExpenseListDTO extends BaseDTO {

    private String description;

    private String dueDate;

    private String value;

    private String openValue;

    private String person;

    public ExpenseListDTO() {
    }

    public ExpenseListDTO(Expense ob) {
        super(ob);
        setPerson(ob.getPerson().getName());
        setValue(ToolReais.toReais(ob.getValue()));
        setDueDate(ob.getDueDate().toString());
        Double payValue = ob.getPayments().stream().mapToDouble(m -> m.getValue()).sum();
        setOpenValue(ToolReais.toReais(ob.getValue() - payValue));
    }

}
