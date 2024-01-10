package com.condelar.cader.app.controllers;

import com.condelar.cader.app.dto.bi.BIDTO;
import com.condelar.cader.app.dto.bi.BIFilterDTO;
import com.condelar.cader.app.dto.bi.BIListDTO;
import com.condelar.cader.app.entiti.BI;
import com.condelar.cader.app.repositories.BIRepository;
import com.condelar.cader.app.services.BIService;
import com.condelar.cader.app.valid.BIValid;
import com.condelar.cader.core.structure.BaseController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/biPlay")
public class BIPlayController extends BaseController<BI, BIDTO, BIFilterDTO, BIListDTO, BIRepository, BIService, BIValid> {

}

