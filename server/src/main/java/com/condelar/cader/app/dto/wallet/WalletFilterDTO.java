package com.condelar.cader.app.dto.wallet;

import com.condelar.cader.app.entiti.Card;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

@Data
public class WalletFilterDTO extends BaseDTO {

    private String name;

    private Short active;

    public WalletFilterDTO() {
    }

    public WalletFilterDTO(Card ob) {
        super(ob);
    }

}
