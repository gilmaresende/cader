package com.condelar.cader.app.constants.enuns;

import com.condelar.cader.core.otherdto.DescriptionId;

public enum EnumExpenseStatus {

    LIQUIDADO((short) 1),
    ABERTO((short) 2),
    PARCIAL((short) 3);
    // 99 reservado para combinacao de filtro 2 e 3
    // ABERTO_PARCIAL((short) 99);

    private Short value;

    EnumExpenseStatus(Short value) {
        this.value = value;
    }

    public static EnumExpenseStatus valueOf(Short value) {
        for (EnumExpenseStatus v : values()) {
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
        EnumExpenseStatus e = valueOf(value);
        DescriptionId d = new DescriptionId();
        d.setId(e.value.longValue());
        d.setDescription(e.name());
        return d;
    }
}
