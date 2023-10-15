package com.condelar.cader.app.services;

import com.condelar.cader.app.dto.cashinflow.CashInflowDTO;
import com.condelar.cader.app.dto.cashinflow.CashInflowFilterDTO;
import com.condelar.cader.app.dto.cashinflow.CashInflowListDTO;
import com.condelar.cader.app.entiti.CashInflow;
import com.condelar.cader.app.repositories.CashInflowRepository;
import com.condelar.cader.app.valid.CashInflowValid;
import com.condelar.cader.core.structure.BaseService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CashInflowService extends BaseService<CashInflow, CashInflowDTO, CashInflowFilterDTO, CashInflowListDTO, CashInflowRepository, CashInflowValid> {

    @Override
    public CashInflow instance() {
        return new CashInflow();
    }

    @Override
    public CashInflow toEntity(CashInflow ob, CashInflowDTO dto) {
        return ob;
    }

    @Override
    public CashInflowDTO toDTO(CashInflow ob) {
        return new CashInflowDTO(ob);
    }

    @Override
    public List<CashInflow> filter(CashInflowFilterDTO ob) {
        return null;
    }

    @Override
    public CashInflowListDTO toListItem(CashInflow ob) {
        return new CashInflowListDTO(ob);
    }
}

