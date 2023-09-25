package com.condelar.cader.app.constants.enuns;

import com.condelar.cader.core.otherdto.DescriptionId;

public enum EnumExpenseOrigin {

    LOTE_DESPESA((short) 1),
    FATURA_CARTAO((short) 2),
    MANUAL((short) 3);

    private Short value;

    EnumExpenseOrigin(Short value) {
        this.value = value;
    }

    public static EnumExpenseOrigin valueOf(Short value) {
        for (EnumExpenseOrigin v : values()) {
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
        EnumExpenseOrigin e = valueOf(value);
        DescriptionId d = new DescriptionId();
        d.setId(e.value.longValue());
        d.setDescription(e.name());
        return d;
    }
}
