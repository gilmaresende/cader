package com.condelar.cader.app.dto.bi;

import com.condelar.cader.app.entiti.BI;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

@Data
public class BIDTO extends BaseDTO {

    String data;

    String name;

    public BIDTO() {
    }

    public BIDTO(BI bi) {
        setData(new String(bi.getBody()));
        setId(bi.getId());
        setName(bi.getName());
    }

}
