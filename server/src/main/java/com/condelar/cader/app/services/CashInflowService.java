package com.condelar.cader.app.services;

import com.condelar.cader.app.constants.enuns.EnumCashInflowStatus;
import com.condelar.cader.app.dto.cashinflow.CashInflowDTO;
import com.condelar.cader.app.dto.cashinflow.CashInflowFilterDTO;
import com.condelar.cader.app.dto.cashinflow.CashInflowListDTO;
import com.condelar.cader.app.dto.cashinflow.CashInflowPaymentDTO;
import com.condelar.cader.app.entiti.CashInflow;
import com.condelar.cader.app.entiti.CashInflowPayment;
import com.condelar.cader.app.entiti.Movement;
import com.condelar.cader.app.repositories.CashInflowRepository;
import com.condelar.cader.app.valid.CashInflowValid;
import com.condelar.cader.core.domain.User;
import com.condelar.cader.core.errors.exceptions.ObjectNotFoundException;
import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.structure.BaseService;
import com.condelar.cader.tool.entity.ToolEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

    public CashInflowPayment predictPayment(CashInflow cashInflow) {
        CashInflowPayment payment = new CashInflowPayment();
        payment.setCashInflow(cashInflow);
        payment.setPaymentType(cashInflow.getPaymentType());
        payment.setPayDay(LocalDate.now());
        payment.setWallet(cashInflow.getWallet());
        payment.setValue(cashInflow.getOpenValue());
        return payment;
    }

    @Transactional
    public CashInflow newPayment(CashInflowPaymentDTO data) {
        CashInflow cashInflow = findById((data.getIdCashInflow()));
        CashInflowPayment payment = new CashInflowPayment();
        payment.setCashInflow(cashInflow);
        payment = updatePaymetByDTO(payment, data);
        cashInflow.getPayments().add(payment);
        payment.setCashInflow(cashInflow);
//        cashInflow = save(cashInflow);
        return cashInflow;
    }

    private CashInflowPayment updatePaymetByDTO(CashInflowPayment payment, CashInflowPaymentDTO data) {
        ToolEntity.cloneAttributes(data, payment);
        payment.setPaymentType(paymentTypeService.findById(data.getPaymentType().getId()));
        payment.setWallet(walletService.findById(data.getWallet().getId()));
        payment.setUser(getUser());
        payment.setUpdate(LocalDateTime.now());
        payment.setRegister(LocalDate.now());
        Movement movement = movementService.newMovement(payment);
        payment.setMovement(movement);
        return payment;
    }

    //@Transactional
    public CashInflow updatePayment(CashInflowPaymentDTO data) {
        CashInflow expense = findById(data.getIdCashInflow());
        CashInflowPayment payment = expense.getPayments().stream().filter(f -> f.getId().equals(data.getId())).findFirst().orElseThrow();
        updatePaymetByDTO(payment, data);
        expense = save(expense);
        return expense;
    }

    public CashInflowPayment getPaymentById(Long idPayment) {
        User user = getUser();
        Optional<CashInflowPayment> op = getRepo().findPaymentByIdAndUser(idPayment, user.getId());
        return op.orElseThrow(() -> new ObjectNotFoundException("Data not found to object of type '" + instance().getClass().getName() + "' with id '" + idPayment + "'"));

    }

    @Transactional
    public CashInflow deletePayment(Long id) {
        CashInflow payment = findByIdPayment(id);
        payment.getPayments().removeIf(f -> f.getId().equals(id));
        payment = save(payment);
        return payment;
    }

    public CashInflow findByIdPayment(Long idPayment) {
        User user = getUser();
        Optional<CashInflow> op = getRepo().findByIdPaymentAndUser(idPayment, user.getId());
        return op.orElseThrow(() -> new ObjectNotFoundException("Data not found to object of type '" + instance().getClass().getName() + "' with id '" + idPayment + "'"));
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

}

