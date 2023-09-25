package com.condelar.cader.app.controllers;

import com.condelar.cader.app.entiti.ExpenseCategory;
import com.condelar.cader.app.dto.expensecategory.ExpenseCategoryDTO;
import com.condelar.cader.app.dto.expensecategory.ExpenseCategoryFilterDTO;
import com.condelar.cader.app.dto.expensecategory.ExpenseCategoryListDTO;
import com.condelar.cader.app.repositories.ExpenseCategoryRepository;
import com.condelar.cader.app.services.ExpenseCategoryService;
import com.condelar.cader.app.valid.ExpenseCategoryValid;
import com.condelar.cader.core.structure.BaseResource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/expenseCategory")
public class ExpenseCategoryResource extends BaseResource<ExpenseCategory, ExpenseCategoryDTO, ExpenseCategoryFilterDTO, ExpenseCategoryListDTO, ExpenseCategoryRepository, ExpenseCategoryService, ExpenseCategoryValid> {

}
