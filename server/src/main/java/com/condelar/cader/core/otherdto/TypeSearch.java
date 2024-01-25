package com.condelar.cader.core.otherdto;

import lombok.Data;

import java.io.Serializable;

@Data
public class TypeSearch implements Serializable {
    private String name;

    private String pathClass;
}
