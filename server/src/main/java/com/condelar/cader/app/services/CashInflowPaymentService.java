package com.condelar.cader.app.services;

import com.condelar.cader.app.dto.cashinflowpayment.CashInflowPaymentDTO;
import com.condelar.cader.app.dto.cashinflowpayment.CashInflowPaymentListDTO;
import com.condelar.cader.app.dto.cashinflowpayment.CashInflowPaymentFilterDTO;
import com.condelar.cader.app.entiti.*;
import com.condelar.cader.app.repositories.CashInflowPaymentRepository;
import com.condelar.cader.app.valid.CashInflowPaymentValid;
import com.condelar.cader.core.structure.BaseService;
import com.condelar.cader.tool.entity.ToolEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CashInflowPaymentService extends BaseService<CashInflowPayment, CashInflowPaymentDTO, CashInflowPaymentFilterDTO, CashInflowPaymentListDTO, CashInflowPaymentRepository, CashInflowPaymentValid> {

    private final WalletService walletService;
    private final PaymentTypeService paymentTypeService;
    private final MovementService movementService;

    private final CashInflowService cashInflowService;

    @Override
    public CashInflowPayment instance() {
        return new CashInflowPayment();
    }

    @Override
    public CashInflowPayment toEntity(CashInflowPayment payment, CashInflowPaymentDTO dto) {
        ToolEntity.cloneAttributes(dto, payment);
        payment.setCashInflow(cashInflowService.findById(dto.getIdCashInflow()));
        payment.setPaymentType(paymentTypeService.findById(dto.getPaymentType().getId()));
        payment.setWallet(walletService.findById(dto.getWallet().getId()));
        payment.setUser(getUser());

        Movement movement = movementService.newMovement(payment);
        payment.setMovement(movement);
        return payment;
    }

    @Override
    public CashInflowPaymentDTO toDTO(CashInflowPayment ob) {
        return new CashInflowPaymentDTO(ob);
    }

    @Override
    public List<CashInflowPayment> filter(CashInflowPaymentFilterDTO ob) {
        return null;
    }

    @Override
    public CashInflowPaymentListDTO toListItem(CashInflowPayment ob) {
        return new CashInflowPaymentListDTO(ob);
    }

    @Override
    public CashInflowPaymentValid getValid() {
        return new CashInflowPaymentValid();
    }

    @Override
    public CashInflowPayment beforeSave(CashInflowPayment ob) {
        if (!ob.getCashInflow().getPayments().contains(ob))
            ob.getCashInflow().getPayments().add(ob);
        this.cashInflowService.beforeSave(ob.getCashInflow());
        return ob;
    }

    @Override
    public CashInflowPayment beforeDelete(CashInflowPayment ob) {
        CashInflow cashInflow = ob.getCashInflow();
        cashInflow.getPayments().removeIf(payment -> payment.equals(ob));
        this.cashInflowService.save(cashInflow);
        return super.beforeDelete(ob);
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
}

