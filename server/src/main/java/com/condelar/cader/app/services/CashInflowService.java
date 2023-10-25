package com.condelar.cader.app.services;

import com.condelar.cader.app.dto.cashinflow.CashInflowDTO;
import com.condelar.cader.app.dto.cashinflow.CashInflowFilterDTO;
import com.condelar.cader.app.dto.cashinflow.CashInflowListDTO;
import com.condelar.cader.app.entiti.CashInflow;
import com.condelar.cader.app.repositories.CashInflowRepository;
import com.condelar.cader.app.valid.CashInflowValid;
import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.structure.BaseService;
import com.condelar.cader.tool.entity.ToolEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CashInflowService extends BaseService<CashInflow, CashInflowDTO, CashInflowFilterDTO, CashInflowListDTO, CashInflowRepository, CashInflowValid> {

    private final WalletService walletService;
    private final PaymentTypeService paymentTypeService;

    private final MovementService movementService;

    private final IncomeCategoryService incomeCategoryService;

    private final PersonService personService;

    @Override
    public CashInflow instance() {
        return new CashInflow();
    }

    @Override
    public CashInflow toEntity(CashInflow ob, CashInflowDTO dto) {
        if (ob.getId() == null) {
            ob.setPayments(new ArrayList<>());
        }
        ToolEntity.cloneAttributes(dto, ob);
        ob.setPaymentType(paymentTypeService.findById(dto.getPaymentType().getId()));
        ob.setWallet(walletService.findById(dto.getWallet().getId()));
        ob.setIncomeCategory(incomeCategoryService.findById(dto.getIncomeCategory().getId()));
        ob.setPerson(personService.findById(dto.getPerson().getId()));
        ob.setUser(getUser());
        ob.setUpdate(LocalDateTime.now());
        ob.setRegister(LocalDate.now());
        return ob;
    }

    @Override
    public CashInflowDTO toDTO(CashInflow ob) {
        return new CashInflowDTO(ob);
    }

    @Override
    public List<CashInflow> filter(CashInflowFilterDTO filter) {
        return getRepo().getFilter(
                filter.getDueDateStart(),
                filter.getDueDateEnd(),
                DescriptionId.getIdShort(filter.getStatus()),
                DescriptionId.getIdLong(filter.getWallet()),
                DescriptionId.getIdLong(filter.getPaymentType()),
                DescriptionId.getIdLong(filter.getPerson()),
                DescriptionId.getIdLong(filter.getIncomeCategory())
        );
    }

    @Override
    public CashInflowListDTO toListItem(CashInflow ob) {
        return new CashInflowListDTO(ob);
    }
}

