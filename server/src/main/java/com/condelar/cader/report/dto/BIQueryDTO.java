package com.condelar.cader.report.dto;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class BIQueryDTO {

    private String label;

    private String data;

    private List<BIQueryDTO> children = new ArrayList<BIQueryDTO>();

}
