package com.condelar.cader.app.controllers;

import com.condelar.cader.app.entiti.CardBuy;
import com.condelar.cader.app.dto.cardbuy.CardBuyDTO;
import com.condelar.cader.app.dto.cardbuy.CardBuyFilterDTO;
import com.condelar.cader.app.dto.cardbuy.CardBuyListDTO;
import com.condelar.cader.app.repositories.CardBuyRepository;
import com.condelar.cader.app.services.CardBuyService;
import com.condelar.cader.app.valid.CardBuyValid;
import com.condelar.cader.core.structure.BaseController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cardBuy")
public class CardBuyController extends BaseController<CardBuy, CardBuyDTO, CardBuyFilterDTO, CardBuyListDTO, CardBuyRepository, CardBuyService, CardBuyValid> {

}

