package com.condelar.cader.app.controllers;

import com.condelar.cader.app.entiti.Movement;
import com.condelar.cader.app.dto.movement.MovementDTO;
import com.condelar.cader.app.dto.movement.MovementFilterDTO;
import com.condelar.cader.app.dto.movement.MovementListDTO;
import com.condelar.cader.app.repositories.MovementRepository;
import com.condelar.cader.app.services.MovementService;
import com.condelar.cader.app.valid.MovementValid;
import com.condelar.cader.core.structure.BaseController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/movement")
public class MovimentController extends BaseController<Movement, MovementDTO, MovementFilterDTO, MovementListDTO, MovementRepository, MovementService, MovementValid> {

}
