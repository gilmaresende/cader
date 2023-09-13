package com.condelar.cader.app.services;

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
        if (ob.getId() == null) {
            ob.setWallet(walletService.findById(dto.getIdWallet()));
        }
        return ob;
    }

    @Override
    public MovementDTO toDTO(Movement ob) {
        return new MovementDTO(ob);
    }

    @Override
    public List<Movement> filter(MovementFilterDTO filter, User user) {
        return getRepo().getFilter(user.getId(), filter.getIdWallet(), filter.getTypeRevenueExpence(), filter.getMovimentDateStart(), filter.getMovimentDateEnd());
    }

    @Override
    public MovementListDTO toListItem(Movement ob) {
        return new MovementListDTO(ob);
    }
}
