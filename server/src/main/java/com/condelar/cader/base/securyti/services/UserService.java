package com.condelar.cader.base.securyti.services;

import com.condelar.cader.base.domain.User;
import com.condelar.cader.base.securyti.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository repository;

    public Long save(User ob) {
        return repository.save(ob).getId();
    }

}
