package com.condelar.cader.report.dto;

import com.condelar.cader.report.constants.EnumTypeParameter;
import lombok.Data;

@Data
public class BIParameterDTO {

    private EnumTypeParameter type;

    private String register;

    private String key;
}
