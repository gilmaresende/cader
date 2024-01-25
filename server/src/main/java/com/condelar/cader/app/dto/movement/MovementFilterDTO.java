package com.condelar.cader.app.dto.movement;

import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

import java.time.LocalDate;

@Data
public class MovementFilterDTO extends BaseDTO {

    private LocalDate movimentDateStart;

    private LocalDate movimentDateEnd;

    private DescriptionId wallet;

    private DescriptionId origin;

    private DescriptionId typeRevenueExpence;

    public MovementFilterDTO() {
    }
}
