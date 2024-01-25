package com.condelar.cader.app.constants.enuns;

import com.condelar.cader.core.otherdto.DescriptionId;

public enum EnumOriginMovement {

    DESPESA((short) 1),
    TRANSFERENCIA((short) 2),
    RECEITA((short) 3),
    MANUAL((short) 4);


    private Short value;

    EnumOriginMovement(Short value) {
        this.value = value;
    }

    public static EnumOriginMovement valueOf(Short value) {
        for (EnumOriginMovement v : values()) {
            if (String.valueOf(value).equalsIgnoreCase(String.valueOf(v.value))) {
                return v;
            }
        }
        throw new RuntimeException("Enum not Found " + value);
    }

    public Short getValue() {
        return value;
    }

    public DescriptionId getDescriptionId() {
        DescriptionId d = new DescriptionId();
        d.setId(this.value.longValue());
        d.setDescription(this.name());
        return d;
    }

    public static DescriptionId getDescriptionId(Short value) {
        EnumOriginMovement e = valueOf(value);
        DescriptionId d = new DescriptionId();
        d.setId(e.value.longValue());
        d.setDescription(e.name());
        return d;
    }
}
