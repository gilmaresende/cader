package com.condelar.cader.report.dto;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class BIDTO {

    private Long id;

    private String name;

    private BIQueryDTO query;

    private List<BIParameterDTO> bIParameters = new ArrayList<BIParameterDTO>();

    public BIDTO(){}

}
