package com.condelar.cader.app.constants.enuns;

public enum EnumYesNo {

    NO((short) 0),
    YES((short) 1);

    private Short value;

    EnumYesNo(Short value) {
        this.value = value;
    }

    public static EnumYesNo valueOf(Short value) {
        for (EnumYesNo v : values()) {
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
