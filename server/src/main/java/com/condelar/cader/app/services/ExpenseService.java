package com.condelar.cader.app.services;

import com.condelar.cader.app.domain.Expense;
import com.condelar.cader.app.dto.expense.ExpenseDTO;
import com.condelar.cader.app.dto.expense.ExpenseFilterDTO;
import com.condelar.cader.app.dto.expense.ExpenseListDTO;
import com.condelar.cader.app.repositories.ExpenseRepository;
import com.condelar.cader.app.valid.ExpenseValid;
import com.condelar.cader.core.domain.User;
import com.condelar.cader.core.structure.BaseService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
