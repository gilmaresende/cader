package com.condelar.cader.app.services;

import com.condelar.cader.app.constants.enuns.EnumOriginMovement;
import com.condelar.cader.app.constants.enuns.EnumTypeRevenueExpence;
import com.condelar.cader.app.domain.ExpensePayment;
import com.condelar.cader.app.domain.Movement;
import com.condelar.cader.app.dto.movement.MovementDTO;
import com.condelar.cader.app.dto.movement.MovementFilterDTO;
import com.condelar.cader.app.dto.movement.MovementListDTO;
import com.condelar.cader.app.repositories.MovementRepository;
import com.condelar.cader.app.valid.MovementValid;
import com.condelar.cader.core.domain.User;
import com.condelar.cader.core.structure.BaseService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MovementService extends BaseService<Movement, MovementDTO, MovementFilterDTO, MovementListDTO, MovementRepository, MovementValid> {

    @Override
    public Movement instance() {
        return new Movement();
    }

    private final WalletService walletService;

    @Override
    public Movement toEntity(Movement ob, MovementDTO dto) {
        if (ob.getId() == null || ob.getId() == 0) {
            ob.setWallet(walletService.findById(dto.getWallet().getId()));
            ob.setOrigin(EnumOriginMovement.MANUAL.getValue());
        }
        ob.setMovementDate(dto.getMovementDate());
        ob.setDescription(dto.getDescription());
        ob.setTypeRevenueExpence(dto.getTypeRevenueExpence().getId().shortValue());
        ob.setValue(dto.getValue());
        return ob;
    }

    @Override
    public MovementDTO toDTO(Movement ob) {
        return new MovementDTO(ob);
    }

    @Override
    public List<Movement> filter(MovementFilterDTO filter, User user) {
        return getRepo().getFilter(user.getId(), filter.getIdWallet(),
                filter.getTypeRevenueExpence(),
                filter.getOrigin(),
                filter.getMovimentDateStart(),
                filter.getMovimentDateEnd());
    }

    @Override
    public MovementListDTO toListItem(Movement ob) {
        return new MovementListDTO(ob);
    }

    public Movement newMovement(ExpensePayment paymentExpense) {
        Movement movement = new Movement();
        movement.setWallet(paymentExpense.getWallet());
        movement.setOrigin(EnumOriginMovement.DESPESA.getValue());
        movement.setUser(getUser());
        movement.setDescription(paymentExpense.getExpense().getDescription());
        movement.setValue(paymentExpense.getValue());
        movement.setUpdate(paymentExpense.getUpdate());
        movement.setMovementDate(paymentExpense.getPayDay());
        movement.setTypeRevenueExpence(EnumTypeRevenueExpence.DESPESA.getValue());
        movement.setRegister(LocalDate.now());

        return movement;
    }
}
