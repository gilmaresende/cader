package com.condelar.cader.app.dto.person;

import com.condelar.cader.app.constants.enuns.EnumYesNo;
import com.condelar.cader.app.domain.Person;
import com.condelar.cader.base.structure.BaseDTO;
import lombok.Data;

@Data
public class PersonFilterDTO extends BaseDTO {

    private String name;

    private EnumYesNo active;

    public PersonFilterDTO() {
    }

    public PersonFilterDTO(Person ob) {
        setId(ob.getId());
        setName(ob.getName());
        setActive(EnumYesNo.valueOf(ob.getActive()));
    }

}
