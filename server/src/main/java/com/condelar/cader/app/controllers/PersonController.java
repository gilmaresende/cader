package com.condelar.cader.app.controllers;

import com.condelar.cader.app.entiti.Person;
import com.condelar.cader.app.dto.person.PersonDTO;
import com.condelar.cader.app.dto.person.PersonFilterDTO;
import com.condelar.cader.app.dto.person.PersonListDTO;
import com.condelar.cader.app.repositories.PersonRepository;
import com.condelar.cader.app.services.PersonService;
import com.condelar.cader.app.valid.PersonValid;
import com.condelar.cader.core.structure.BaseController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/person")
public class PersonController extends BaseController<Person, PersonDTO, PersonFilterDTO, PersonListDTO, PersonRepository, PersonService, PersonValid> {

}
