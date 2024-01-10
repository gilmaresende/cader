package com.condelar.cader.app.services;

import com.condelar.cader.app.dto.bi.BIDTO;
import com.condelar.cader.app.dto.bi.BIFilterDTO;
import com.condelar.cader.app.dto.bi.BIListDTO;
import com.condelar.cader.app.entiti.BI;
import com.condelar.cader.app.repositories.BIRepository;
import com.condelar.cader.app.valid.BIValid;
import com.condelar.cader.core.errors.exceptions.ObjectNotFoundException;
import com.condelar.cader.core.otherdto.DescriptionStr;
import com.condelar.cader.core.structure.BaseService;
import com.condelar.cader.core.structure.RegisterEntity;
import com.condelar.cader.toollibs.hibernet.QueryHqlService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BIService extends BaseService<BI, BIDTO, BIFilterDTO, BIListDTO, BIRepository, BIValid> {

    @Autowired
    private QueryHqlService serviceQuery;

    @Override
    public BI instance() {
        return new BI();
    }

    @Override
    public BI toEntity(BI ob, BIDTO str) {
        ob.setName(str.getName());
        ob.setBody(str.getData().getBytes());
        return ob;
    }

    @Override
    public List<BI> list(BI base) {
        return getRepo().findAll();
    }

    @Override
    public BIDTO toDTO(BI ob) {
        return new BIDTO(ob);
    }

    @Override
    public List<BI> filter(BIFilterDTO ob) {
        return getRepo().getBIs().stream().map(m -> new BI(m)).collect(Collectors.toList());
    }

    @Override
    public BIListDTO toListItem(BI ob) {
        return new BIListDTO(ob);
    }

    @Override
    public BI find(BI base) {
        Optional<BI> biOp = getRepo().findById(base.getId());
        BI bi = biOp.orElseThrow(() -> new ObjectNotFoundException("Report not found"));
        return bi;
    }

    public List<DescriptionStr> findComboReport(String entity) {
        StringBuilder query = new StringBuilder();
        query.append("SELECT\n");
        query.append("entity\n");
        query.append("FROM ");
        query.append(entity);
        query.append(" entity\n");
        System.out.println(query.toString());
        List list = (List)serviceQuery.executeToList(query.toString());
        List<DescriptionStr> response = new ArrayList<>();
        for(Object item : list){
            RegisterEntity i =(RegisterEntity) item;
            response.add(new DescriptionStr(i.getId().toString(), i.toString()));
        }
        return response;
    }
}

