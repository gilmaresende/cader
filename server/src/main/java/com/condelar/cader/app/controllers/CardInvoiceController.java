package com.condelar.cader.app.controllers;

import com.condelar.cader.app.dto.cardinvoice.CardInvoiceDTO;
import com.condelar.cader.app.dto.cardinvoice.CardInvoiceFilterDTO;
import com.condelar.cader.app.dto.cardinvoice.CardInvoiceListDTO;
import com.condelar.cader.app.entiti.CardInvoice;
import com.condelar.cader.app.repositories.CardInvoiceRepository;
import com.condelar.cader.app.services.CardInvoiceService;
import com.condelar.cader.app.valid.CardInvoiceValid;
import com.condelar.cader.core.structure.BaseController;
import com.condelar.cader.core.structure.util.PackageDT;
import com.condelar.cader.report.service.BIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cardInvoice")
public class CardInvoiceController extends BaseController<CardInvoice, CardInvoiceDTO, CardInvoiceFilterDTO, CardInvoiceListDTO, CardInvoiceRepository, CardInvoiceService, CardInvoiceValid> {

    @PostMapping("/findLaunches")
    public ResponseEntity<PackageDT<CardInvoiceDTO>> findLaunches(@RequestBody CardInvoiceDTO cardInvoiceDTO) {
        getValid().clear();
        getValid().findLaunches(cardInvoiceDTO);
        getValid().hasError();
        cardInvoiceDTO = getService().findLaunches(cardInvoiceDTO);
        PackageDT<CardInvoiceDTO> pack = new PackageDT();
        pack.setData(cardInvoiceDTO);
        return ResponseEntity.ok().body(pack);
    }
}

