package com.condelar.cader.app.dto.lotofexpense;

import com.condelar.cader.app.constants.enuns.EnumExpenseStatus;
import com.condelar.cader.app.entiti.*;
import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.structure.BaseDTO;
import lombok.Data;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
public class LotOfExpenseDTO extends BaseDTO {

    private String description;
    private LocalDate firstDue;
    private LocalDate lastDue;
    private DescriptionId category;
    private DescriptionId paymentType;
    private DescriptionId wallet;
    private DescriptionId person;
    private Double valueBase = 0D;
    private Integer amount = 1;
    private List<ItemLotOfExpenseDTO> withPayments = new ArrayList<>();
    private List<ItemLotOfExpenseDTO> noPayments = new ArrayList<>();

    public LotOfExpenseDTO() {
    }

    public LotOfExpenseDTO(LotOfExpense ob) {
        super(ob);
        setCategory(ob.getCategory().getDescriptionId());
        setPaymentType(ob.getPaymentType().getDescriptionId());
        setWallet(ob.getWallet().getDescriptionId());
        setPerson(ob.getPerson().getDescriptionId());
        ob.getItems().forEach(item -> {
            if (!item.getExpense().getStatus().equals(EnumExpenseStatus.ABERTO.getValue())) {
                withPayments.add(new ItemLotOfExpenseDTO(item));
            } else {
                noPayments.add(new ItemLotOfExpenseDTO(item));
            }
        });
    }

}

