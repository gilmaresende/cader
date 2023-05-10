package com.condelar.cader.base.securyti.services;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.condelar.cader.base.domain.User;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TokenService {

    public String gerarToken(User user) {
        return JWT.create().withIssuer("home1").withSubject(user.getUsername()).withClaim("id", user.getId())
                .withExpiresAt(LocalDateTime.now().plusMinutes(60L).toInstant(ZoneOffset.of("-03:00")))
                .sign(Algorithm.HMAC256("secreta"));
    }

    public String getSubject(String token) {
        return JWT.require(Algorithm.HMAC256("secreta")).withIssuer("home1").build().verify(token).getSubject();
    }

}