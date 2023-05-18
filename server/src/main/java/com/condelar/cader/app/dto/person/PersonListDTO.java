package com.condelar.cader.app.dto.person;

import com.condelar.cader.app.domain.Person;
import com.condelar.cader.base.structure.BaseDTO;
import lombok.Data;

@Data
public class PersonListDTO extends BaseDTO {

    private String name;

    private Short active;

    public PersonListDTO() {
    }

    public PersonListDTO(Person ob) {
        super(ob);
    }

}
