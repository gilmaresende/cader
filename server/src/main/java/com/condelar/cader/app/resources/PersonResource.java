package com.condelar.cader.app.resources;

import com.condelar.cader.app.domain.Person;
import com.condelar.cader.app.services.PersonService;
import com.condelar.cader.base.structure.BaseResource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/person")
public class PersonResource extends BaseResource<Person, PersonService> {

}
