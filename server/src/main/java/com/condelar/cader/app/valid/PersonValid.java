package com.condelar.cader.app.valid;

import com.condelar.cader.app.domain.Person;
import com.condelar.cader.app.dto.person.PersonDTO;
import com.condelar.cader.base.structure.BaseValid;
import org.springframework.stereotype.Component;

@Component
public class PersonValid extends BaseValid<PersonDTO, Person> {

    @Override
    public void validDtoToSave(PersonDTO dto) {
        if (isEmpty(dto.getName())) {
            addErrors("name", "The filed name can not be empty!");
        }
    }

    @Override
    public void validObject(Person ob) {

    }
}
