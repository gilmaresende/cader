package com.condelar.cader.app.dto.wallet;

import com.condelar.cader.app.domain.Wallet;
import com.condelar.cader.base.structure.BaseDTO;
import lombok.Data;

@Data
public class WalletDTO extends BaseDTO {

    private String name;

    private Short active;

    private Long idPersonExpense;

    private Long idPaymentType;

    private Long idExpenseCategoryBuyCard;

    public WalletDTO() {
    }

    public WalletDTO(Wallet ob) {
        super(ob);
    }

}
