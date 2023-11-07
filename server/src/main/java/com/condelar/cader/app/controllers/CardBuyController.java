package com.condelar.cader.app.controllers;

import com.condelar.cader.app.dto.cardbuy.CardBuyDTO;
import com.condelar.cader.app.dto.cardbuy.CardBuyFilterDTO;
import com.condelar.cader.app.dto.cardbuy.CardBuyListDTO;
import com.condelar.cader.app.entiti.CardBuy;
import com.condelar.cader.app.repositories.CardBuyRepository;
import com.condelar.cader.app.services.CardBuyService;
import com.condelar.cader.app.valid.CardBuyValid;
import com.condelar.cader.core.structure.BaseController;
import com.condelar.cader.core.structure.util.PackageDT;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cardBuy")
public class CardBuyController extends BaseController<CardBuy, CardBuyDTO, CardBuyFilterDTO, CardBuyListDTO, CardBuyRepository, CardBuyService, CardBuyValid> {

    @PostMapping("/toCalculeteLaunches")
    public ResponseEntity<PackageDT<CardBuyDTO>> toCalculeteLaunches(@RequestBody CardBuyDTO cardBuyPredict) {
        getValid().clear();
        getValid().validBuildLaunches(cardBuyPredict);
        getValid().hasError();
        cardBuyPredict = getService().preview(cardBuyPredict);
        PackageDT<CardBuyDTO> pack = new PackageDT();
        pack.setData(cardBuyPredict);
        return ResponseEntity.ok().body(pack);
    }
}

