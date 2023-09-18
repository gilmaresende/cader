package com.condelar.cader.app.constants.enuns;

public enum EnumStatusExpensePayment {

    OPEN((short) 0),
    CLOSED((short) 1),
    PARTIAL((short) 3);

    private Short value;

    EnumStatusExpensePayment(Short value) {
        this.value = value;
    }

    public static EnumStatusExpensePayment valueOf(Short value) {
        for (EnumStatusExpensePayment v : values()) {
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
