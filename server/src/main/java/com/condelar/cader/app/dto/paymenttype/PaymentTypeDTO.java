package com.condelar.cader.app.dto.paymenttype;

import com.condelar.cader.app.entiti.PaymentType;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

@Data
public class PaymentTypeDTO extends BaseDTO {

    private String name;

    private Short active;

    public PaymentTypeDTO() {
    }

    public PaymentTypeDTO(PaymentType ob) {
        setId(ob.getId());
        setName(ob.getName());
        setActive(ob.getActive());
    }

}
