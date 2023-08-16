package com.condelar.cader.app.valid;

import com.condelar.cader.app.domain.Wallet;
import com.condelar.cader.app.dto.wallet.WalletDTO;
import com.condelar.cader.base.structure.BaseValid;
import org.springframework.stereotype.Component;

@Component
public class WalletValid extends BaseValid<WalletDTO, Wallet> {

    @Override
    public void validDtoToSave(WalletDTO dto) {
        if (isEmpty(dto.getName())) {
            addErrors("name", "The filed name can not be empty!");
        }
    }

    @Override
    public void validObject(Wallet ob) {

    }

    @Override
    public void validDelete(Wallet ob) {

    }
}
