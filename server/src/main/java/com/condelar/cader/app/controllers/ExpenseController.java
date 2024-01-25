package com.condelar.cader.app.controllers;

import com.condelar.cader.app.dto.expense.ExpenseDTO;
import com.condelar.cader.app.dto.expense.ExpenseFilterDTO;
import com.condelar.cader.app.dto.expense.ExpenseListDTO;
import com.condelar.cader.app.entiti.Expense;
import com.condelar.cader.app.repositories.ExpenseRepository;
import com.condelar.cader.app.services.ExpenseService;
import com.condelar.cader.app.valid.ExpenseValid;
import com.condelar.cader.core.structure.BaseController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/expense")
public class ExpenseController extends BaseController<Expense, ExpenseDTO, ExpenseFilterDTO, ExpenseListDTO, ExpenseRepository, ExpenseService, ExpenseValid> {

}
