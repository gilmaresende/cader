package com.condelar.cader.app.constants.enuns;

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
}
