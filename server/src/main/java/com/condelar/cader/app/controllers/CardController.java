package com.condelar.cader.app.controllers;

import com.condelar.cader.app.entiti.Card;
import com.condelar.cader.app.dto.card.CardDTO;
import com.condelar.cader.app.dto.card.CardFilterDTO;
import com.condelar.cader.app.dto.card.CardListDTO;
import com.condelar.cader.app.repositories.CardRepository;
import com.condelar.cader.app.services.CardService;
import com.condelar.cader.app.valid.CardValid;
import com.condelar.cader.core.structure.BaseController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/card")
public class CardController extends BaseController<Card, CardDTO, CardFilterDTO, CardListDTO, CardRepository, CardService, CardValid> {

}
