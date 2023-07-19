package com.condelar.cader.base.securyti.services;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.condelar.cader.base.domain.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TokenService {

    @Value("${vKeyPass}")
    private String keyPass;

    @Value("${vTokenValidity}")
    private String tokenValidity;

    public String gerarToken(User user) {
        System.out.println(keyPass);
        return JWT.create().withIssuer("").withSubject(user.getUsername()).withClaim("id", user.getId())
                .withExpiresAt(LocalDateTime.now().plusHours(Long.parseLong(tokenValidity)).toInstant(ZoneOffset.of("-03:00")))
                .sign(Algorithm.HMAC256(keyPass));
    }

    public String getSubject(String token) {
        return JWT.require(Algorithm.HMAC256(keyPass)).withIssuer("").build().verify(token).getSubject();
    }

}