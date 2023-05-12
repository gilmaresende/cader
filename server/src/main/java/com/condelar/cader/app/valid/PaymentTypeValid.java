package com.condelar.cader.app.valid;

import com.condelar.cader.app.domain.PaymentType;
import com.condelar.cader.app.dto.paymenttype.PaymentTypeDTO;
import com.condelar.cader.base.structure.BaseValid;
import org.springframework.stereotype.Component;

@Component
public class PaymentTypeValid extends BaseValid<PaymentTypeDTO, PaymentType> {

    @Override
    public void validDtoToSave(PaymentTypeDTO dto) {
        if (isEmpty(dto.getName())) {
            addErrors("name", "The filed name can not be empty!");
        }
    }

    @Override
    public void validObject(PaymentType ob) {

    }

    @Override
    public void validDelete(PaymentType ob) {

    }
}
