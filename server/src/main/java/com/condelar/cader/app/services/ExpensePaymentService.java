package com.condelar.cader.app.services;

import com.condelar.cader.app.dto.expensepayment.ExpensePaymentDTO;
import com.condelar.cader.app.dto.expensepayment.ExpensePaymentFilterDTO;
import com.condelar.cader.app.dto.expensepayment.ExpensePaymentListDTO;
import com.condelar.cader.app.entiti.Expense;
import com.condelar.cader.app.entiti.ExpensePayment;
import com.condelar.cader.app.entiti.Movement;
import com.condelar.cader.app.repositories.ExpensePaymentRepository;
import com.condelar.cader.app.valid.ExpensePaymentValid;
import com.condelar.cader.core.structure.BaseService;
import com.condelar.cader.tool.entity.ToolEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ExpensePaymentService extends BaseService<ExpensePayment, ExpensePaymentDTO, ExpensePaymentFilterDTO, ExpensePaymentListDTO, ExpensePaymentRepository, ExpensePaymentValid> {

    private final WalletService walletService;
    private final PaymentTypeService paymentTypeService;
    private final MovementService movementService;

    private final ExpenseService expenseService;

    @Override
    public ExpensePayment instance() {
        return new ExpensePayment();
    }

    @Override
    public ExpensePayment toEntity(ExpensePayment payment, ExpensePaymentDTO dto) {
        ToolEntity.cloneAttributes(dto, payment);
        payment.setExpense(expenseService.findById(dto.getIdExpense()));
        payment.setPaymentType(paymentTypeService.findById(dto.getPaymentType().getId()));
        payment.setWallet(walletService.findById(dto.getWallet().getId()));
        payment.setUser(getUser());

        Movement movement = movementService.newMovement(payment);
        payment.setMovement(movement);
        return payment;
    }

    @Override
    public ExpensePaymentDTO toDTO(ExpensePayment ob) {
        return new ExpensePaymentDTO(ob);
    }

    @Override
    public List<ExpensePayment> filter(ExpensePaymentFilterDTO ob) {
        return null;
    }

    @Override
    public ExpensePaymentListDTO toListItem(ExpensePayment ob) {
        return new ExpensePaymentListDTO(ob);
    }

    @Override
    public ExpensePayment beforeSave(ExpensePayment ob) {
        if (!ob.getExpense().getPayments().contains(ob))
            ob.getExpense().getPayments().add(ob);
        this.expenseService.beforeSave(ob.getExpense());
        return ob;
    }

    @Override
    public ExpensePayment beforeDelete(ExpensePayment ob) {
        Expense expense = ob.getExpense();
        expense.getPayments().removeIf(payment -> payment.equals(ob));
        this.expenseService.save(expense);
        return super.beforeDelete(ob);
    }

    @Override
    public ExpensePaymentValid getValid() {
        return new ExpensePaymentValid();
    }


    public ExpensePayment predictPayment(Expense expense) {
        ExpensePayment expensePayment = new ExpensePayment();
        expensePayment.setExpense(expense);
        expensePayment.setPaymentType(expense.getPaymentType());
        expensePayment.setPayDay(LocalDate.now());
        expensePayment.setWallet(expense.getWallet());
        expensePayment.setValue(expense.getValue() - expense.getPayments().stream().mapToDouble(m -> m.getValue()).sum());
        return expensePayment;
    }
}

