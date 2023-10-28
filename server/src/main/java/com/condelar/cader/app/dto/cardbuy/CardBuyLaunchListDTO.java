package com.condelar.cader.app.dto.cardbuy;

import com.condelar.cader.app.entiti.CardBuyLaunch;
import com.condelar.cader.core.structure.BaseDTO;
import jakarta.persistence.Column;
import lombok.Data;

import java.time.LocalDate;

@Data
public class CardBuyLaunchListDTO extends BaseDTO {



    public CardBuyLaunchListDTO() {
    }

    public CardBuyLaunchListDTO(CardBuyLaunch ob) {
        super(ob);
    }

}

