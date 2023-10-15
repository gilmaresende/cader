package com.condelar.cader.app.constants.enuns;

import com.condelar.cader.core.otherdto.DescriptionId;

public enum EnumCashInflowStatus {

    ABERTO((short) 1),
    LIQUIDADO((short) 2),
    PARCIAL((short) 3);
    // 99 reservado para combinacao de filtro 2 e 3
    // ABERTO_PARCIAL((short) 99);

    private Short value;

    EnumCashInflowStatus(Short value) {
        this.value = value;
    }

    public static EnumCashInflowStatus valueOf(Short value) {
        for (EnumCashInflowStatus v : values()) {
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
        EnumCashInflowStatus e = valueOf(value);
        DescriptionId d = new DescriptionId();
        d.setId(e.value.longValue());
        d.setDescription(e.name());
        return d;
    }
}
