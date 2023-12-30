package com.condelar.cader.app.dto.bi;

import com.condelar.cader.app.entiti.BI;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

@Data
public class BIFilterDTO extends BaseDTO {

    public BIFilterDTO() {
    }

    public BIFilterDTO(BI ob) {
        super(ob);
    }

}

