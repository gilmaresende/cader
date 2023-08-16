package com.condelar.cader.app.dto.wallet;

import com.condelar.cader.app.domain.Card;
import com.condelar.cader.base.structure.BaseDTO;
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
