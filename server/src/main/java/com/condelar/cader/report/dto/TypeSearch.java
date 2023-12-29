package com.condelar.cader.report.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class TypeSearch implements Serializable {
    private String name;

    private String pathClass;
}
