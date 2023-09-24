package com.condelar.cader.core.otherdto;

import com.condelar.cader.core.structure.RegisterEntity;
import lombok.Data;

@Data
public class DescriptionId {

    private Long id;

    private String description;

    public DescriptionId() {
    }

    public DescriptionId(RegisterEntity r) {
        setId(r.getId());
        setDescription(r.toString());
    }
}
