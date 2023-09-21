package com.condelar.cader.app.valid;

import com.condelar.cader.app.domain.Wallet;
import com.condelar.cader.app.dto.wallet.WalletDTO;
import com.condelar.cader.core.structure.BaseValid;
import org.springframework.stereotype.Component;

@Component
public class WalletValid extends BaseValid<WalletDTO, Wallet> {

    @Override
    public void validDtoToSave(WalletDTO dto) {
        if (isEmpty(dto.getName())) {
            addErrors("name", "The filed name can not be empty!");
        }

        if (isNull(dto.getActive())) {
            addErrors("active", "The filed active is mandatory!");
        }

        if (isNull(dto.getReserved())) {
            addErrors("reserved", "The filed reserved is mandatory!");
        }

        if (isNull(dto.getCanBeNegative())) {
            addErrors("canBeNegative", "The filed canBeNegative is mandatory!");
        }
    }

    @Override
    public void validObject(Wallet ob) {

    }

    @Override
    public void validDelete(Wallet ob) {

    }
}
