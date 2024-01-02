package com.condelar.cader.app.constants.enuns;

import com.condelar.cader.core.otherdto.DescriptionStr;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public enum EnumTypeParameter {
    INTEGER,
    DOUBLE,
    STRING,
    LOCAL_DATE,
    REGISTER;


    public static Map toMap() {
        Map<String, EnumTypeParameter> enumMap = new HashMap<>();
        for (EnumTypeParameter valor : EnumTypeParameter.values()) {
            enumMap.put(valor.toString(), valor);
        }
        return enumMap;
    }

    public static List<DescriptionStr> toList() {
        List<DescriptionStr> response = new ArrayList<>();
        for (EnumTypeParameter valor : EnumTypeParameter.values()) {
            response.add(new DescriptionStr(valor.toString(), valor.toString()));
        }
        return response;
    }


}
