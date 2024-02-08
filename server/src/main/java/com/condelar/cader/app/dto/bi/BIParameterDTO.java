package com.condelar.cader.app.dto.bi;

import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.otherdto.DescriptionStr;
import lombok.Data;

import java.io.Serializable;

@Data
public class BIParameterDTO implements Serializable {

    private String key;

    private String name;

    private DescriptionId typePrimitiveOrEntity;

    private DescriptionId typePrimitive;

    private String valueDefault;

    private DescriptionStr subTypeDate;

    private DescriptionStr typeClass;

    private Boolean customized;

}
