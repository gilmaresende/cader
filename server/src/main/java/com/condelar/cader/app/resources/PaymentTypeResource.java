package com.condelar.cader.app.resources;

import com.condelar.cader.app.domain.PaymentType;
import com.condelar.cader.app.dto.paymenttype.PaymentTypeDTO;
import com.condelar.cader.app.dto.paymenttype.PaymentTypeFilterDTO;
import com.condelar.cader.app.dto.paymenttype.PaymentTypeListDTO;
import com.condelar.cader.app.repositories.PaymentTypeRepository;
import com.condelar.cader.app.services.PaymentTypeService;
import com.condelar.cader.app.valid.PaymentTypeValid;
import com.condelar.cader.core.structure.BaseResource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/paymentType")
public class PaymentTypeResource extends BaseResource<PaymentType, PaymentTypeDTO, PaymentTypeFilterDTO, PaymentTypeListDTO, PaymentTypeRepository, PaymentTypeService, PaymentTypeValid> {

}
