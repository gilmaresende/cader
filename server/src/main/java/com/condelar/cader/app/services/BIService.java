package com.condelar.cader.app.services;

import com.condelar.cader.app.dto.bi.BIDTO;
import com.condelar.cader.app.dto.bi.BIFilterDTO;
import com.condelar.cader.app.dto.bi.BIListDTO;
import com.condelar.cader.app.entiti.BI;
import com.condelar.cader.app.repositories.BIRepository;
import com.condelar.cader.app.valid.BIValid;
import com.condelar.cader.core.errors.exceptions.ObjectNotFoundException;
import com.condelar.cader.core.structure.BaseService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BIService extends BaseService<BI, BIDTO, BIFilterDTO, BIListDTO, BIRepository, BIValid> {

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
}

