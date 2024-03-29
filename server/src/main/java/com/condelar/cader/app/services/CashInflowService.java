package com.condelar.cader.app.services;

import com.condelar.cader.app.constants.enuns.EnumCashInflowOrigin;
import com.condelar.cader.app.constants.enuns.EnumCashInflowStatus;
import com.condelar.cader.app.dto.cashinflow.CashInflowDTO;
import com.condelar.cader.app.dto.cashinflow.CashInflowFilterDTO;
import com.condelar.cader.app.dto.cashinflow.CashInflowListDTO;
import com.condelar.cader.app.entiti.CashInflow;
import com.condelar.cader.app.repositories.CashInflowRepository;
import com.condelar.cader.app.valid.CashInflowValid;
import com.condelar.cader.core.domain.User;
import com.condelar.cader.core.errors.exceptions.ObjectNotFoundException;
import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.structure.BaseService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static com.condelar.cader.tool.util.Tools.isPositive;

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
        if (!isPositive(ob.getId())) {
            ob.setPayments(new ArrayList<>());
            ob.setOrigin(EnumCashInflowOrigin.MANUAL.getValue());
            ob.setRegister(LocalDate.now());
        }
        ob.setDescription(dto.getDescription());
        ob.setValueTotal(dto.getValueTotal());
        ob.setDueDate(dto.getDueDate());
        ob.setOpeningDate(dto.getOpeningDate());
        ob.setPaymentType(paymentTypeService.findById(dto.getPaymentType().getId()));
        ob.setWallet(walletService.findById(dto.getWallet().getId()));
        ob.setIncomeCategory(incomeCategoryService.findById(dto.getIncomeCategory().getId()));
        ob.setPerson(personService.findById(dto.getPerson().getId()));
        ob.setUser(getUser());
        ob.setUpdate(LocalDateTime.now());
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

    @Override
    public CashInflow beforeSave(CashInflow ob) {
        ob.getPayments().forEach(payment -> payment.setCashInflow(ob));
        Double payValue = ob.getPayments().stream().mapToDouble(v -> v.getValue()).sum();
        Double openValue = ob.getValueTotal() - payValue;
        ob.setOpenValue(openValue);
        ob.setAmountPaid(payValue);
        if (ob.getValueTotal() - payValue <= 0) {
            ob.setStatus(EnumCashInflowStatus.LIQUIDADO.getValue());
        } else if (payValue > 0) {
            ob.setStatus(EnumCashInflowStatus.PARCIAL.getValue());
        } else {
            ob.setStatus(EnumCashInflowStatus.ABERTO.getValue());
        }
        return super.beforeSave(ob);
    }

    @Override
    public CashInflowValid getValid() {
        return new CashInflowValid();
    }

}

