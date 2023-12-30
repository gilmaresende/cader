package com.condelar.cader.app.dto.bi;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Data
public class BIDataDTO implements Serializable {

    private Long id;

    private String name;

    private BIQueryDTO query;

    @JsonProperty("bIParameters")
    private List<BIParameterDTO> bIParameters = new ArrayList<BIParameterDTO>();

    public BIDataDTO(){}

}
