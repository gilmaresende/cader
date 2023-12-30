package com.condelar.cader.app.dto.bi;

import com.condelar.cader.app.entiti.BI;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

@Data
public class BIListDTO extends BaseDTO {

    private String name;

    public BIListDTO() {
    }

    public BIListDTO(BI ob) {
        super(ob);
        setId(ob.getId());
        this.name = ob.getName();
    }
}

