package com.condelar.cader.app.services;

import com.condelar.cader.app.domain.Person;
import com.condelar.cader.app.repositories.PersonRepository;
import com.condelar.cader.base.structure.BaseService;
import org.springframework.stereotype.Service;

@Service
public class PersonService extends BaseService<Person, PersonRepository> {

    @Override
    public Person instance() {
        return new Person();
    }
}
