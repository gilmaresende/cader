package com.condelar.cader.app.dto.movement;

import com.condelar.cader.app.constants.enuns.EnumTypeRevenueExpence;
import com.condelar.cader.app.entiti.Movement;
import com.condelar.cader.core.structure.BaseDTO;
import com.condelar.cader.tool.formatter.ToolReais;
import lombok.Data;

@Data
public class MovementListDTO extends BaseDTO {

    private String description;

    private String movimentDate;

    private String wallet;

    private String typeRevenueExpence;

    private String value;

    public MovementListDTO() {
    }

    public MovementListDTO(Movement ob) {
        setId(ob.getId());
        setDescription(ob.getDescription());
        setMovimentDate(ob.getRegister().toString());
        setWallet(ob.getWallet().getName());
        setTypeRevenueExpence(EnumTypeRevenueExpence.valueOf(ob.getTypeRevenueExpence()).toString());
        setValue(ToolReais.toReais(ob.getValue()));
    }

}
