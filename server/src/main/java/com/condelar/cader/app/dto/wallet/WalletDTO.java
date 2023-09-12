package com.condelar.cader.app.dto.wallet;

import com.condelar.cader.app.domain.Wallet;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

@Data
public class WalletDTO extends BaseDTO {

    private String name;

    private Short active;

    private Short reserved;

    private Short canBeNegative;

    private Double balance;

    public WalletDTO() {
    }

    public WalletDTO(Wallet ob) {
        super(ob);
    }

}
