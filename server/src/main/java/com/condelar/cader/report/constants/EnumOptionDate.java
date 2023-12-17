package com.condelar.cader.report.constants;

import com.condelar.cader.core.otherdto.DescriptionId;

import java.util.ArrayList;
import java.util.List;

public enum EnumOptionDate {
    FIST_DAY_MONTH((short) 1, "Primeiro dia Mês"),
    LAST_DAY_MONTH((short) 2, "Último dia Mês");

    private Short value;
    private String description;

    EnumOptionDate(Short value, String description) {
        this.value = value;
        this.description = description;
    }

    public static EnumOptionDate valueOf(Short value) {
        for (EnumOptionDate v : values()) {
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
        d.setDescription(this.description);
        return d;
    }

    public static DescriptionId getDescriptionId(Short value) {
        EnumOptionDate e = valueOf(value);
        DescriptionId d = new DescriptionId();
        d.setId(e.value.longValue());
        d.setDescription(e.description);
        return d;
    }

    public static List<DescriptionId> toList() {
        List<DescriptionId> res = new ArrayList<>();
        for (EnumOptionDate v : values()) {
            res.add(getDescriptionId(v.value));
        }
        return res;
    }
}
