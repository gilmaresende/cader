package com.condelar.cader.app.constants.enuns;

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
}
