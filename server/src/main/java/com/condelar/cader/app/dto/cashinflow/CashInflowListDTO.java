package com.condelar.cader.app.dto.cashinflow;

import com.condelar.cader.app.entiti.CashInflow;
import com.condelar.cader.core.structure.BaseDTO;
import com.condelar.cader.tool.formatter.ToolReais;
import lombok.Data;

@Data
public class CashInflowListDTO extends BaseDTO {

    private String description;

    private String dueDate;

    private String value;

    private String openValue;

    private String person;

    public CashInflowListDTO() {
    }

    public CashInflowListDTO(CashInflow ob) {
        super(ob);
        setPerson(ob.getPerson().getName());
        setValue(ToolReais.toReais(ob.getValueTotal()));
        setDueDate(ob.getDueDate().toString());
        setOpenValue(ToolReais.toReais(ob.getOpenValue()));
    }

}

