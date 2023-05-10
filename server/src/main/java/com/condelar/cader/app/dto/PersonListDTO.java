package com.condelar.cader.app.dto;

import com.condelar.cader.app.constants.enuns.EnumYesNo;
import com.condelar.cader.app.domain.Person;
import com.condelar.cader.base.structure.BaseDTO;
import lombok.Data;

@Data
public class PersonListDTO extends BaseDTO {

    private String name;

    private EnumYesNo active;

    public PersonListDTO() {
    }

    public PersonListDTO(Person ob) {
        setId(ob.getId());
        setName(ob.getName());
        setActive(EnumYesNo.valueOf(ob.getActive()));
    }

}
