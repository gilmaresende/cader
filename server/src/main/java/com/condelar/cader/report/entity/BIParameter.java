package com.condelar.cader.report.entity;

import com.condelar.cader.report.constants.EnumTypeParameter;
import lombok.Data;

@Data
public class BIParameter {

    private EnumTypeParameter type;

    private String register;

    private String key;
}
