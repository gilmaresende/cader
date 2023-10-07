package com.condelar.cader.app.controllers;

import com.condelar.cader.app.entiti.PaymentType;
import com.condelar.cader.app.dto.paymenttype.PaymentTypeDTO;
import com.condelar.cader.app.dto.paymenttype.PaymentTypeFilterDTO;
import com.condelar.cader.app.dto.paymenttype.PaymentTypeListDTO;
import com.condelar.cader.app.repositories.PaymentTypeRepository;
import com.condelar.cader.app.services.PaymentTypeService;
import com.condelar.cader.app.valid.PaymentTypeValid;
import com.condelar.cader.core.structure.BaseController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/paymentType")
public class PaymentTypeController extends BaseController<PaymentType, PaymentTypeDTO, PaymentTypeFilterDTO, PaymentTypeListDTO, PaymentTypeRepository, PaymentTypeService, PaymentTypeValid> {

}
