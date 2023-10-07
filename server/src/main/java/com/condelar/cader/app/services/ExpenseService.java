package com.condelar.cader.app.services;

import com.condelar.cader.app.constants.enuns.EnumExpenseStatus;
import com.condelar.cader.app.entiti.Expense;
import com.condelar.cader.app.entiti.ExpensePayment;
import com.condelar.cader.app.entiti.Movement;
import com.condelar.cader.app.dto.expense.ExpenseDTO;
import com.condelar.cader.app.dto.expense.ExpenseFilterDTO;
import com.condelar.cader.app.dto.expense.ExpenseListDTO;
import com.condelar.cader.app.dto.expense.ExpensePaymentDTO;
import com.condelar.cader.app.repositories.ExpenseRepository;
import com.condelar.cader.app.valid.ExpenseValid;
import com.condelar.cader.core.domain.User;
import com.condelar.cader.core.errors.exceptions.ObjectNotFoundException;
import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.structure.BaseService;
import com.condelar.cader.tool.entity.ToolEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ExpenseService extends BaseService<Expense, ExpenseDTO, ExpenseFilterDTO, ExpenseListDTO, ExpenseRepository, ExpenseValid> {

    private final WalletService walletService;
    private final PaymentTypeService paymentTypeService;
    private final MovementService movementService;

    private final ExpenseCategoryService expenseCategoryService;

    private final PersonService personService;

    @Override
    public Expense instance() {
        return new Expense();
    }

    @Override
    public Expense toEntity(Expense expense, ExpenseDTO dto) {
        if (expense.getId() == null) {
            expense.setPayments(new ArrayList<>());
        }
        ToolEntity.cloneAttributes(dto, expense);
        expense.setPaymentType(paymentTypeService.findById(dto.getPaymentType().getId()));
        expense.setWallet(walletService.findById(dto.getWallet().getId()));
        expense.setExpenseCategory(expenseCategoryService.findById(dto.getExpenseCategory().getId()));
        expense.setPerson(personService.findById(dto.getPerson().getId()));
        expense.setUser(getUser());
        expense.setUpdate(LocalDateTime.now());
        expense.setRegister(LocalDate.now());
        return expense;
    }

    @Override
    public ExpenseDTO toDTO(Expense ob) {
        return new ExpenseDTO(ob);
    }

    @Override
    public List<Expense> filter(ExpenseFilterDTO filter) {
        return getRepo().getFilter(
                filter.getDueDateStart(),
                filter.getDueDateEnd(),
                DescriptionId.getIdShort(filter.getStatus()),
                DescriptionId.getIdLong(filter.getWallet()),
                DescriptionId.getIdLong(filter.getPaymentType()),
                DescriptionId.getIdLong(filter.getPerson()),
                DescriptionId.getIdLong(filter.getExpenseCategory())
        );
    }

    @Override
    public ExpenseListDTO toListItem(Expense ob) {
        return new ExpenseListDTO(ob);
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

    public ExpensePayment getPaymentById(Long idPayment) {
        User user = getUser();
        Optional<ExpensePayment> op = getRepo().findByIdAndUser(idPayment, user.getId());
        return op.orElseThrow(() -> new ObjectNotFoundException("Data not found to object of type '" + instance().getClass().getName() + "' with id '" + idPayment + "'"));

    }

    @Override
    public Expense beforeSave(Expense ob) {
        ob.getPayments().forEach(payment -> payment.setExpense(ob));
        Double payValue = ob.getPayments().stream().mapToDouble(v -> v.getValue()).sum();
        if (ob.getValue() - payValue <= 0) {
            ob.setStatus(EnumExpenseStatus.LIQUIDADO.getValue());
        } else if (payValue > 0) {
            ob.setStatus(EnumExpenseStatus.PARCIAL.getValue());
        } else {
            ob.setStatus(EnumExpenseStatus.ABERTO.getValue());
        }
        return super.beforeSave(ob);
    }

    public Expense newPayment(ExpensePaymentDTO dto) {
        Expense expense = findById((dto.getIdExpense()));
        ExpensePayment payment = new ExpensePayment();

        ToolEntity.cloneAttributes(dto, payment);
        payment.setExpense(expense);
        payment.setPaymentType(paymentTypeService.findById(dto.getIdPaymentType()));
        payment.setWallet(walletService.findById(dto.getIdWallet()));
        payment.setUser(getUser());
        payment.setUpdate(LocalDateTime.now());
        payment.setRegister(LocalDate.now());
        expense.getPayments().add(payment);
        Movement movement = movementService.newMovement(payment);
        payment.setMovement(movement);
        return expense;
    }
}
