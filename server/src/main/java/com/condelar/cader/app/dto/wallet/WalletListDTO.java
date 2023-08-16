package com.condelar.cader.app.dto.wallet;

import com.condelar.cader.app.domain.Wallet;
import com.condelar.cader.base.structure.BaseDTO;
import lombok.Data;

@Data
public class WalletListDTO extends BaseDTO {

    private String name;

    private Short active;

    public WalletListDTO() {
    }

    public WalletListDTO(Wallet ob) {
        super(ob);
    }

}
