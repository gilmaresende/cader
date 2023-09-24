package com.condelar.cader.app.valid;

import com.condelar.cader.app.constants.enuns.EnumOriginMovement;
import com.condelar.cader.app.constants.enuns.EnumTypeRevenueExpence;
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
            addErrors("description", "The Description name can not be empty!");
        }

        if (isNull(dto.getMovementDate())) {
            addErrors("movementDate", "The Moviment Date can not be empty!");
        }

        if (isPositive(dto.getValue())) {
            addErrors("value", "Value should is bigger zero!");
        }

        if (isNull(dto.getWallet())) {
            addErrors("idWallet", "Wallet must is informed!");
        }

        if (isNull(dto.getTypeRevenueExpence())) {
            addErrors("typeRevenueExpence", "Revenue/Expence must is informed!");
        }
    }

    @Override
    public void validObject(Movement ob) {
        if (!ob.getOrigin().equals(EnumOriginMovement.MANUAL.getValue())) {
            addErrors("erroValidation", "Non manual Moviment not  not can be changed!");
        }
    }

    @Override
    public void validDelete(Movement ob) {

    }
}
