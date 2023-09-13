package com.condelar.cader.app.valid;

import com.condelar.cader.app.domain.Movement;
import com.condelar.cader.app.domain.Wallet;
import com.condelar.cader.app.dto.movement.MovementDTO;
import com.condelar.cader.app.dto.wallet.WalletDTO;
import com.condelar.cader.core.structure.BaseValid;
import org.springframework.stereotype.Component;

@Component
public class MovementValid extends BaseValid<MovementDTO, Movement> {

    @Override
    public void validDtoToSave(MovementDTO dto) {
        if (isEmpty(dto.getDescription())) {
            addErrors("name", "The filed name can not be empty!");
        }
    }

    @Override
    public void validObject(Movement ob) {

    }

    @Override
    public void validDelete(Movement ob) {

    }
}
