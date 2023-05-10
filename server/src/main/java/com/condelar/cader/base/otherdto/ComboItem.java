package com.condelar.cader.base.otherdto;

import com.condelar.cader.base.structure.BaseDTO;
import com.condelar.cader.base.structure.RegisterEntity;
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
