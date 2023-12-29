package com.condelar.cader.report.dto;

import lombok.Data;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Data
public class BIQueryDTO implements Serializable {

    private String label;

    private String data;

    private List<BIQueryDTO> children = new ArrayList<BIQueryDTO>();

}
