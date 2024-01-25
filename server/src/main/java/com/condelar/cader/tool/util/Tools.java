package com.condelar.cader.tool.util;

public class Tools {

    public static Boolean isPositive(Number value) {
        if (value == null) {
            return false;
        }
        Double valueDouble = value.doubleValue();
        return valueDouble > 0;
    }
}
