package com.condelar.cader.app.constants.enuns;

import com.condelar.cader.core.otherdto.DescriptionId;

public enum EnumTypeRevenueExpence {
    RECEITA((short) 2),
    DESPESA((short) 1);

    private Short value;

    EnumTypeRevenueExpence(Short value) {
        this.value = value;
    }

    public static EnumTypeRevenueExpence valueOf(Short value) {
        for (EnumTypeRevenueExpence v : values()) {
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
        EnumTypeRevenueExpence e = valueOf(value);
        DescriptionId d = new DescriptionId();
        d.setId(e.value.longValue());
        d.setDescription(e.name());
        return d;
    }
}
