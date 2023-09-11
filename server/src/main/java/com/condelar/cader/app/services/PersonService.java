package com.condelar.cader.app.services;

import com.condelar.cader.app.constants.enuns.EnumYesNo;
import com.condelar.cader.app.domain.Person;
import com.condelar.cader.app.dto.person.PersonDTO;
import com.condelar.cader.app.dto.person.PersonFilterDTO;
import com.condelar.cader.app.dto.person.PersonListDTO;
import com.condelar.cader.app.repositories.PersonRepository;
import com.condelar.cader.app.valid.PersonValid;
import com.condelar.cader.core.domain.User;
import com.condelar.cader.core.structure.BaseService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonService extends BaseService<Person, PersonDTO, PersonFilterDTO, PersonListDTO, PersonRepository, PersonValid> {

    @Override
    public Person instance() {
        return new Person();
    }

    @Override
    public Person toEntity(Person ob, PersonDTO dto) {
        ob.setName(dto.getName());
        ob.setActive(EnumYesNo.valueOf(dto.getActive()).getValue());
        return ob;
    }

    @Override
    public PersonDTO toDTO(Person ob) {
        return new PersonDTO(ob);
    }

    @Override
    public List<Person> filter(PersonFilterDTO ob, User user) {
        return null;
    }

    @Override
    public PersonListDTO toListItem(Person ob) {
        return new PersonListDTO(ob);
    }
}
