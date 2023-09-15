package com.condelar.cader.app.resources;

import com.condelar.cader.app.domain.Expense;
import com.condelar.cader.app.dto.expense.ExpenseDTO;
import com.condelar.cader.app.dto.expense.ExpenseFilterDTO;
import com.condelar.cader.app.dto.expense.ExpenseListDTO;
import com.condelar.cader.app.repositories.ExpenseRepository;
import com.condelar.cader.app.services.ExpenseService;
import com.condelar.cader.app.valid.ExpenseValid;
import com.condelar.cader.core.structure.BaseResource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/expense")
public class ExpenseResource extends BaseResource<Expense, ExpenseDTO, ExpenseFilterDTO, ExpenseListDTO, ExpenseRepository, ExpenseService, ExpenseValid> {

}
