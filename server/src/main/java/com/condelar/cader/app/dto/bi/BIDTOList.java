package com.condelar.cader.app.dto.bi;

import com.condelar.cader.core.structure.BaseDTO;
import com.condelar.cader.app.entiti.BI;
import lombok.Data;

import java.io.Serializable;

@Data
public class BIDTOList extends BaseDTO implements Serializable {
    private String name;

    public BIDTOList(BI bi) {
        setId(bi.getId());
        this.name = bi.getName();
    }

    public BIDTOList() {
    }
}
