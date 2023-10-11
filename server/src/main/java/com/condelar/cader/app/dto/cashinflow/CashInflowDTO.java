package com.condelar.cader.app.dto.cashinflow;

import com.condelar.cader.app.entiti.CashInflow;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

@Data
public class CashInflowDTO extends BaseDTO {

    public CashInflowDTO() {
    }

    public CashInflowDTO(CashInflow ob) {
        super(ob);
    }

}

