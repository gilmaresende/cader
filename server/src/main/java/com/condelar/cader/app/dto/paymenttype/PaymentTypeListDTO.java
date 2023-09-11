package com.condelar.cader.app.dto.paymenttype;

import com.condelar.cader.app.domain.PaymentType;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

@Data
public class PaymentTypeListDTO extends BaseDTO {

    private String name;

    private Short active;

    public PaymentTypeListDTO() {
    }

    public PaymentTypeListDTO(PaymentType ob) {
        setId(ob.getId());
        setName(ob.getName());
        setActive(ob.getActive());

    }

}
