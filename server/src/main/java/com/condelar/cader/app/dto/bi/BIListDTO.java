package com.condelar.cader.app.dto.bi;

import com.condelar.cader.app.entiti.BI;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

@Data
public class BIListDTO extends BaseDTO {

    public BIListDTO() {
    }

    public BIListDTO(BI ob) {
        super(ob);
    }

}

