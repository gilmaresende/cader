package com.condelar.cader.app.dto.movement;

import com.condelar.cader.app.constants.enuns.EnumOriginMovement;
import com.condelar.cader.app.constants.enuns.EnumTypeRevenueExpence;
import com.condelar.cader.app.entiti.Movement;
import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

import java.time.LocalDate;

@Data
public class MovementDTO extends BaseDTO {

    private String description;

    private LocalDate movementDate;

    private DescriptionId origin;

    private DescriptionId typeRevenueExpence;

    private DescriptionId wallet;

    private Double value;


    public MovementDTO() {
    }

    public MovementDTO(Movement ob) {
        super(ob);
        setWallet(ob.getWallet().getDescriptionId());
        setTypeRevenueExpence(EnumTypeRevenueExpence.getDescriptionId(ob.getTypeRevenueExpence()));
        setOrigin(EnumOriginMovement.getDescriptionId(ob.getOrigin()));
    }

}
