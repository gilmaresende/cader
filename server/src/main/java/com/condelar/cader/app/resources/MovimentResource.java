package com.condelar.cader.app.resources;

import com.condelar.cader.app.domain.Movement;
import com.condelar.cader.app.dto.movement.MovementDTO;
import com.condelar.cader.app.dto.movement.MovementFilterDTO;
import com.condelar.cader.app.dto.movement.MovementListDTO;
import com.condelar.cader.app.repositories.MovementRepository;
import com.condelar.cader.app.services.MovementService;
import com.condelar.cader.app.valid.MovementValid;
import com.condelar.cader.core.structure.BaseResource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/movement")
public class MovimentResource extends BaseResource<Movement, MovementDTO, MovementFilterDTO, MovementListDTO, MovementRepository, MovementService, MovementValid> {

}
