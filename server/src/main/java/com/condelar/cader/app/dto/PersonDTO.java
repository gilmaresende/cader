package com.condelar.cader.app.dto;

import com.condelar.cader.app.domain.Person;
import com.condelar.cader.base.structure.BaseDTO;
import lombok.Data;

@Data
public class PersonDTO extends BaseDTO {

    private String name;

    private Short active;

    public PersonDTO() {
    }

    public PersonDTO(Person ob) {
        setId(ob.getId());
        setName(ob.getName());
        setActive(ob.getActive());
    }

}
