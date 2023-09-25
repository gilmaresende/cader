package com.condelar.cader.app.resources;

import com.condelar.cader.app.entiti.IncomeCategory;
import com.condelar.cader.app.dto.incomecategory.IncomeCategoryDTO;
import com.condelar.cader.app.dto.incomecategory.IncomeCategoryFilterDTO;
import com.condelar.cader.app.dto.incomecategory.IncomeCategoryListDTO;
import com.condelar.cader.app.repositories.IncomeCategoryRepository;
import com.condelar.cader.app.services.IncomeCategoryService;
import com.condelar.cader.app.valid.IncomeCategoryValid;
import com.condelar.cader.core.structure.BaseResource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/incomeCategory")
public class IncomeCategoryResource extends BaseResource<IncomeCategory, IncomeCategoryDTO, IncomeCategoryFilterDTO, IncomeCategoryListDTO, IncomeCategoryRepository, IncomeCategoryService, IncomeCategoryValid> {

}
