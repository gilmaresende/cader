package com.condelar.cader.report.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Data
@Document(collection = "bi")
public class BI {

    @Id
    private String id;

    private String name;

    private BIQuery query;

    private List<BIParameter> bIParameters = new ArrayList<BIParameter>();


}
