package com.condelar.cader.core.structure.util;

public class FunctionValid {

    public Boolean isEmpty(String s) {
        return s == null || s.isEmpty();
    }

    public Boolean isZeroOrNull(Number number) {
        return number == null || number.doubleValue() == 0D;
    }
}
