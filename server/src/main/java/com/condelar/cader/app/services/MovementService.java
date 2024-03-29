package com.condelar.cader.app.services;

import com.condelar.cader.app.constants.enuns.EnumOriginMovement;
import com.condelar.cader.app.constants.enuns.EnumTypeRevenueExpence;
import com.condelar.cader.app.entiti.CashInflowPayment;
import com.condelar.cader.app.entiti.ExpensePayment;
import com.condelar.cader.app.entiti.Movement;
import com.condelar.cader.app.dto.movement.MovementDTO;
import com.condelar.cader.app.dto.movement.MovementFilterDTO;
import com.condelar.cader.app.dto.movement.MovementListDTO;
import com.condelar.cader.app.repositories.MovementRepository;
import com.condelar.cader.app.valid.MovementValid;
import com.condelar.cader.core.domain.User;
import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.structure.BaseService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
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
    public List<Movement> filter(MovementFilterDTO filter) {
        return getRepo().getFilter(getUser().getId(),
                DescriptionId.getIdLong(filter.getWallet()),
                DescriptionId.getIdShort(filter.getTypeRevenueExpence()),
                DescriptionId.getIdShort(filter.getOrigin()),
                filter.getMovimentDateStart(),
                filter.getMovimentDateEnd());
    }

    @Override
    public MovementListDTO toListItem(Movement ob) {
        return new MovementListDTO(ob);
    }

    @Override
    public MovementValid getValid() {
        return new MovementValid();
    }

    public Movement newMovement(ExpensePayment paymentExpense) {
        Movement movement = paymentExpense.getMovement();
        if (movement == null) {
            movement = new Movement();
            movement.setWallet(paymentExpense.getWallet());
        }
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

    public Movement newMovement(CashInflowPayment payment) {
        Movement movement = payment.getMovement();
        if (movement == null) {
            movement = new Movement();
            movement.setWallet(payment.getWallet());
        }
        movement.setOrigin(EnumOriginMovement.RECEITA.getValue());
        movement.setUser(getUser());
        movement.setDescription(payment.getCashInflow().getDescription());
        movement.setValue(payment.getValue());
        movement.setUpdate(payment.getUpdate());
        movement.setMovementDate(payment.getPayDay());
        movement.setTypeRevenueExpence(EnumTypeRevenueExpence.RECEITA.getValue());
        movement.setRegister(LocalDate.now());

        return movement;
    }
}
