package com.condelar.cader.app.dto.lotofexpense;

import com.condelar.cader.app.entiti.LotOfExpense;
import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.structure.BaseDTO;
import com.condelar.cader.tool.formatter.ToolReais;
import lombok.Data;

import java.time.LocalDate;

@Data
public class LotOfExpenseListDTO extends BaseDTO {

    private String description;
    private String person;
    private String valueBase;

    public LotOfExpenseListDTO() {
    }

    public LotOfExpenseListDTO(LotOfExpense ob) {
        super(ob);
        setDescription(ob.getDescription());
        setPerson(ob.getPerson().getName());
        setValueBase(ToolReais.toReais(ob.getValueBase()));
    }

}

