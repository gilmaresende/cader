package com.condelar.cader.app.dto.movement;

import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

import java.time.LocalDate;

@Data
public class MovementFilterDTO extends BaseDTO {

    private LocalDate movimentDateStart;

    private LocalDate movimentDateEnd;

    private Long idWallet;

    private Short origin;

    private Short typeRevenueExpence;

    public MovementFilterDTO() {
    }
}
