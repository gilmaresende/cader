package com.condelar.cader.app.dto.cashinflow;

import com.condelar.cader.app.entiti.CashInflow;
import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class CashInflowDTO extends BaseDTO {

    private String description;

    private LocalDate openingDate;

    private LocalDate dueDate;

    private DescriptionId wallet;

    private DescriptionId paymentType;

    private DescriptionId person;

    private DescriptionId incomeCategory;

    private Double amountPaid;

    private Double openValue;

    private Double valueTotal;

    private String observation;

    private Short origin;

    private Short status;

    private List<CashInflowPaymentListDTO> payments = new ArrayList<>();

    public CashInflowDTO() {
    }

    public CashInflowDTO(CashInflow ob) {
        super(ob);
        setIncomeCategory(ob.getIncomeCategory().getDescriptionId());
        setPaymentType(ob.getPaymentType().getDescriptionId());
        setWallet(ob.getWallet().getDescriptionId());
        setPerson(ob.getPerson().getDescriptionId());
        setPayments(ob.getPayments().stream().map(m -> new CashInflowPaymentListDTO(m)).collect(Collectors.toList()));
    }

}

