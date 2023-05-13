package com.condelar.cader.app.services;

import com.condelar.cader.app.constants.enuns.EnumYesNo;
import com.condelar.cader.app.domain.IncomeCategory;
import com.condelar.cader.app.dto.incomecategory.IncomeCategoryDTO;
import com.condelar.cader.app.dto.incomecategory.IncomeCategoryFilterDTO;
import com.condelar.cader.app.dto.incomecategory.IncomeCategoryListDTO;
import com.condelar.cader.app.repositories.IncomeCategoryRepository;
import com.condelar.cader.app.valid.IncomeCategoryValid;
import com.condelar.cader.base.domain.User;
import com.condelar.cader.base.structure.BaseService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IncomeCategoryService extends BaseService<IncomeCategory, IncomeCategoryDTO, IncomeCategoryFilterDTO, IncomeCategoryListDTO, IncomeCategoryRepository, IncomeCategoryValid> {

    @Override
    public IncomeCategory instance() {
        return new IncomeCategory();
    }

    @Override
    public IncomeCategory toEntity(IncomeCategory ob, IncomeCategoryDTO dto) {
        ob.setName(dto.getName());
        ob.setActive(EnumYesNo.valueOf(dto.getActive()).getValue());
        return ob;
    }

    @Override
    public IncomeCategoryDTO toDTO(IncomeCategory ob) {
        return new IncomeCategoryDTO(ob);
    }

    @Override
    public List<IncomeCategory> filter(IncomeCategoryFilterDTO ob, User user) {
        return null;
    }

    @Override
    public IncomeCategoryListDTO toListItem(IncomeCategory ob) {
        return new IncomeCategoryListDTO(ob);
    }
}
