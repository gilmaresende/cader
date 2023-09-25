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

    public static Long getIdLong(DescriptionId dI) {
        if (dI == null) {
            return 0L;
        }
        return dI.getId();
    }

    public static Short getIdShort(DescriptionId dI) {
        if (dI == null) {
            return 0;
        }
        return dI.getId().shortValue();
    }
}
