package com.condelar.cader.report.service;

import com.condelar.cader.report.constants.EnumTypeParameter;
import com.condelar.cader.report.entity.BI;
import com.condelar.cader.report.entity.BIParameter;
import com.condelar.cader.report.entity.BIQuery;
import com.condelar.cader.report.repository.BIRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BIService {

    @Autowired
    private BIRepository biRepository;

    public BI save() {
        BI bi = new BI();
        bi.setName("Lista despesas em Aberto");

        BIQuery query = new BIQuery();
        query.setQuery("select coisa tal");

        List<BIQuery> queries = new ArrayList<>();

        BIQuery qItem = new BIQuery();
        qItem.setQuery("select coisa tal");
        queries.add(qItem);

        query.setQueriesChildren(queries);
        bi.setQuery(query);

        BIParameter p1 = new BIParameter();
        p1.setKey("pCard");
        p1.setType(EnumTypeParameter.REGISTER);
        p1.setRegister("Card");

        BIParameter p2 = new BIParameter();
        p2.setKey("pAno");
        p2.setType(EnumTypeParameter.INTEGER);

        bi.getBIParameters().add(p1);
        bi.getBIParameters().add(p2);

        return biRepository.save(bi);
    }

}
