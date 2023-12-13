package com.condelar.cader.report.entity;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class BIQuery {

    private String name;

    private String query;

    private List<BIQuery> queriesChildren = new ArrayList<BIQuery>();

}
