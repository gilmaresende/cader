package com.condelar.cader.core.otherdto;

import lombok.Data;

import java.io.Serializable;

@Data
public class DescriptionStr implements Serializable {

    private String id;

    private String description;

    public DescriptionStr() {
    }

    public DescriptionStr(String id, String value) {
        setId(id);
        setDescription(value);
    }
}
