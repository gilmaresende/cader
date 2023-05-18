package com.condelar.cader.app.dto.person;

import com.condelar.cader.app.domain.Person;
import com.condelar.cader.base.structure.BaseDTO;
import lombok.Data;

@Data
public class PersonFilterDTO extends BaseDTO {

    private String name;

    private Short active;

    public PersonFilterDTO() {
    }

    public PersonFilterDTO(Person ob) {
        super(ob);
    }

}
