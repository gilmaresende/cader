package com.condelar.cader.app.services;

import com.condelar.cader.app.domain.Expense;
import com.condelar.cader.app.domain.ExpensePayment;
import com.condelar.cader.app.dto.expense.ExpenseDTO;
import com.condelar.cader.app.dto.expense.ExpenseFilterDTO;
import com.condelar.cader.app.dto.expense.ExpenseListDTO;
import com.condelar.cader.app.repositories.ExpenseRepository;
import com.condelar.cader.app.valid.ExpenseValid;
import com.condelar.cader.core.domain.User;
import com.condelar.cader.core.errors.exceptions.ObjectNotFoundException;
import com.condelar.cader.core.structure.BaseService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ExpenseService extends BaseService<Expense, ExpenseDTO, ExpenseFilterDTO, ExpenseListDTO, ExpenseRepository, ExpenseValid> {

    @Override
    public Expense instance() {
        return new Expense();
    }

    @Override
    public Expense toEntity(Expense ob, ExpenseDTO dto) {
        return ob;
    }

    @Override
    public ExpenseDTO toDTO(Expense ob) {
        return new ExpenseDTO(ob);
    }

    @Override
    public List<Expense> filter(ExpenseFilterDTO filter, User user) {
        return getRepo().getFilter(
                filter.getDueDateStart(),
                filter.getDueDateEnd(),
                filter.getStatus(),
                filter.getIdWallet(),
                filter.getIdPaymentType(),
                filter.getIdPerson(),
                filter.getIdExpenseCategory()
        );
    }

    @Override
    public ExpenseListDTO toListItem(Expense ob) {
        return new ExpenseListDTO(ob);
    }

    public ExpensePayment predictPayment(Long id) {
        Expense expense = findById(id);
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
}
