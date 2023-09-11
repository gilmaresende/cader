package com.condelar.cader.app.services;

import com.condelar.cader.app.constants.enuns.EnumYesNo;
import com.condelar.cader.app.domain.ExpenseCategory;
import com.condelar.cader.app.dto.expensecategory.ExpenseCategoryDTO;
import com.condelar.cader.app.dto.expensecategory.ExpenseCategoryFilterDTO;
import com.condelar.cader.app.dto.expensecategory.ExpenseCategoryListDTO;
import com.condelar.cader.app.repositories.ExpenseCategoryRepository;
import com.condelar.cader.app.valid.ExpenseCategoryValid;
import com.condelar.cader.core.domain.User;
import com.condelar.cader.core.structure.BaseService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseCategoryService extends BaseService<ExpenseCategory, ExpenseCategoryDTO, ExpenseCategoryFilterDTO, ExpenseCategoryListDTO, ExpenseCategoryRepository, ExpenseCategoryValid> {

    @Override
    public ExpenseCategory instance() {
        return new ExpenseCategory();
    }

    @Override
    public ExpenseCategory toEntity(ExpenseCategory ob, ExpenseCategoryDTO dto) {
        ob.setName(dto.getName());
        ob.setActive(EnumYesNo.valueOf(dto.getActive()).getValue());
        return ob;
    }

    @Override
    public ExpenseCategoryDTO toDTO(ExpenseCategory ob) {
        return new ExpenseCategoryDTO(ob);
    }

    @Override
    public List<ExpenseCategory> filter(ExpenseCategoryFilterDTO ob, User user) {
        return null;
    }

    @Override
    public ExpenseCategoryListDTO toListItem(ExpenseCategory ob) {
        return new ExpenseCategoryListDTO(ob);
    }
}
