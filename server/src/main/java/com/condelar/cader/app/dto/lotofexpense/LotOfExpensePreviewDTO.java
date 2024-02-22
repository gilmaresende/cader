package com.condelar.cader.app.dto.lotofexpense;

import lombok.Data;

import java.time.LocalDate;

@Data
public class LotOfExpensePreviewDTO {

    private LocalDate firstDue;
    private Double valueBase;
    private Integer amount;

    public LotOfExpensePreviewDTO() {
    }
}

