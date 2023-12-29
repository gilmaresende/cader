package com.condelar.cader.report.dto;

import com.condelar.cader.core.structure.BaseDTO;
import com.condelar.cader.report.entity.BI;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class BIDTOList extends BaseDTO {
    private String name;

    public BIDTOList(BI bi) {
        setId(bi.getId());
        this.name = bi.getName();
    }

    public BIDTOList() {
    }
}
