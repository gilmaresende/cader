package com.condelar.cader.core.securyti.repositories;


import com.condelar.cader.core.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

    User findByLogin(String login);

}
