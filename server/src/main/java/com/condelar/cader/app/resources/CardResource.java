package com.condelar.cader.app.resources;

import com.condelar.cader.app.domain.Card;
import com.condelar.cader.app.domain.ExpenseCategory;
import com.condelar.cader.app.dto.card.CardDTO;
import com.condelar.cader.app.dto.card.CardFilterDTO;
import com.condelar.cader.app.dto.card.CardListDTO;
import com.condelar.cader.app.dto.expensecategory.ExpenseCategoryDTO;
import com.condelar.cader.app.dto.expensecategory.ExpenseCategoryFilterDTO;
import com.condelar.cader.app.dto.expensecategory.ExpenseCategoryListDTO;
import com.condelar.cader.app.repositories.CardRepository;
import com.condelar.cader.app.repositories.ExpenseCategoryRepository;
import com.condelar.cader.app.services.CardService;
import com.condelar.cader.app.services.ExpenseCategoryService;
import com.condelar.cader.app.valid.CardValid;
import com.condelar.cader.app.valid.ExpenseCategoryValid;
import com.condelar.cader.base.structure.BaseResource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/card")
public class CardResource extends BaseResource<Card, CardDTO, CardFilterDTO, CardListDTO, CardRepository, CardService, CardValid> {

}
