package com.condelar.cader.base.securyti.repositories;


import com.condelar.cader.base.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

    User findByLogin(String login);

}
