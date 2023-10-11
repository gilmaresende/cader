package com.condelar.cader.app.dto.cashinflow;

import com.condelar.cader.app.entiti.CashInflow;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

@Data
public class CashInflowFilterDTO extends BaseDTO {

    public CashInflowFilterDTO() {
    }

    public CashInflowFilterDTO(CashInflow ob) {
        super(ob);
    }

}

