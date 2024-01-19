package com.condelar.cader.app.controllers;

import com.condelar.cader.app.dto.cashinflow.CashInflowDTO;
import com.condelar.cader.app.dto.cashinflow.CashInflowFilterDTO;
import com.condelar.cader.app.dto.cashinflow.CashInflowListDTO;
import com.condelar.cader.app.entiti.CashInflow;
import com.condelar.cader.app.repositories.CashInflowRepository;
import com.condelar.cader.app.services.CashInflowService;
import com.condelar.cader.app.valid.CashInflowValid;
import com.condelar.cader.core.structure.BaseController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cashInflow")
public class CashInflowController extends BaseController<CashInflow, CashInflowDTO, CashInflowFilterDTO, CashInflowListDTO, CashInflowRepository, CashInflowService, CashInflowValid> {

}

