package com.condelar.cader.app.controllers;

import com.condelar.cader.app.entiti.CashInflow;
import com.condelar.cader.app.entiti.CashInflowPayment;
import com.condelar.cader.app.dto.cashinflowpayment.CashInflowPaymentDTO;
import com.condelar.cader.app.dto.cashinflowpayment.CashInflowPaymentFilterDTO;
import com.condelar.cader.app.dto.cashinflowpayment.CashInflowPaymentListDTO;
import com.condelar.cader.app.repositories.CashInflowPaymentRepository;
import com.condelar.cader.app.services.CashInflowPaymentService;
import com.condelar.cader.app.services.CashInflowService;
import com.condelar.cader.app.valid.CashInflowPaymentValid;
import com.condelar.cader.core.structure.BaseController;
import com.condelar.cader.core.structure.util.PackageDT;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cashInflowPayment")
public class CashInflowPaymentController extends BaseController<CashInflowPayment, CashInflowPaymentDTO,
        CashInflowPaymentFilterDTO, CashInflowPaymentListDTO, CashInflowPaymentRepository,
        CashInflowPaymentService, CashInflowPaymentValid> {

    @Autowired
    private CashInflowService cashInflowService;


    @GetMapping("/predictPayment/{idCashInflow}")
    public ResponseEntity<PackageDT<CashInflowPaymentDTO>> predictPayment(@PathVariable Long idCashInflow) {
        CashInflow cashInflow = cashInflowService.findById(idCashInflow);
        CashInflowPaymentValid valid = getValid();
        valid.validPreviewNewPayment(cashInflow);
        valid.hasError();


        CashInflowPayment paymentPreview = getService().predictPayment(cashInflow);
        PackageDT<CashInflowPaymentDTO> pack = new PackageDT();
        pack.setData(new CashInflowPaymentDTO(paymentPreview));
        return ResponseEntity.ok().body(pack);
    }
}

