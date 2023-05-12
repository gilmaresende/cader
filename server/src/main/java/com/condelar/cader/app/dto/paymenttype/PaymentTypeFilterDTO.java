package com.condelar.cader.app.dto.paymenttype;

import com.condelar.cader.app.domain.PaymentType;
import com.condelar.cader.base.structure.BaseDTO;
import lombok.Data;

@Data
public class PaymentTypeFilterDTO extends BaseDTO {

    private String name;

    private Short active;

    public PaymentTypeFilterDTO() {
    }

    public PaymentTypeFilterDTO(PaymentType ob) {
        setId(ob.getId());
        setName(ob.getName());
        setActive(ob.getActive());
    }

}
