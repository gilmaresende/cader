package com.condelar.cader.app.services;

import com.condelar.cader.app.constants.enuns.EnumYesNo;
import com.condelar.cader.app.entiti.PaymentType;
import com.condelar.cader.app.dto.paymenttype.PaymentTypeDTO;
import com.condelar.cader.app.dto.paymenttype.PaymentTypeFilterDTO;
import com.condelar.cader.app.dto.paymenttype.PaymentTypeListDTO;
import com.condelar.cader.app.repositories.PaymentTypeRepository;
import com.condelar.cader.app.valid.PaymentTypeValid;
import com.condelar.cader.core.domain.User;
import com.condelar.cader.core.structure.BaseService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentTypeService extends BaseService<PaymentType, PaymentTypeDTO, PaymentTypeFilterDTO, PaymentTypeListDTO, PaymentTypeRepository, PaymentTypeValid> {

    @Override
    public PaymentType instance() {
        return new PaymentType();
    }

    @Override
    public PaymentType toEntity(PaymentType ob, PaymentTypeDTO dto) {
        ob.setName(dto.getName());
        ob.setActive(EnumYesNo.valueOf(dto.getActive()).getValue());
        return ob;
    }

    @Override
    public PaymentTypeDTO toDTO(PaymentType ob) {
        return new PaymentTypeDTO(ob);
    }

    @Override
    public List<PaymentType> filter(PaymentTypeFilterDTO ob) {
        return null;
    }

    @Override
    public PaymentTypeListDTO toListItem(PaymentType ob) {
        return new PaymentTypeListDTO(ob);
    }
}
