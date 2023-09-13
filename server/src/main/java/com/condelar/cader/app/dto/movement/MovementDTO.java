package com.condelar.cader.app.dto.movement;

import com.condelar.cader.app.domain.Movement;
import com.condelar.cader.app.domain.PaymentType;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

import java.time.LocalDate;

@Data
public class MovementDTO extends BaseDTO {

    private String description;

    private LocalDate movimentDate;

    private Short origin;

    private Short typeRevenueExpence;

    private Double value = 0D;

    private Long idWallet;

    public MovementDTO() {
    }

    public MovementDTO(Movement ob) {
        super(ob);
        setIdWallet(ob.getWallet().getId());
    }

}
