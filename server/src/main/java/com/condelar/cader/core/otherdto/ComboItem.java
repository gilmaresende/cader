package com.condelar.cader.core.otherdto;

import com.condelar.cader.core.structure.BaseDTO;
import com.condelar.cader.core.structure.RegisterEntity;
import lombok.Data;

@Data
public class ComboItem extends BaseDTO {

    private String description;

    private Short active;

    public ComboItem() {
    }

    public ComboItem(RegisterEntity r) {
        setId(r.getId());
        setDescription(r.toString());
        setActive(r.getActive());
    }
}
