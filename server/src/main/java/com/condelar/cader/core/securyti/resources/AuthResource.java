package com.condelar.cader.core.securyti.resources;

import com.condelar.cader.core.domain.User;
import com.condelar.cader.core.dto.LoginDTO;
import com.condelar.cader.core.dto.UserDTO;
import com.condelar.cader.core.errors.exceptions.ValidException;
import com.condelar.cader.core.errors.exceptionshandler.ValidationError;
import com.condelar.cader.core.securyti.services.TokenService;
import com.condelar.cader.core.securyti.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class AuthResource {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private BCryptPasswordEncoder encoder;

    @Autowired
    private UserService service;

    @PostMapping("/login")
    public String login(@RequestBody LoginDTO login) {
        validLogin(login);
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(login.login(),
                login.password());

        Authentication authentication = this.authenticationManager.authenticate(authenticationToken);
        User user = (User) authentication.getPrincipal();
        return tokenService.gerarToken(user);
    }

    @PostMapping("/toRegister")
    public ResponseEntity toRegister(@RequestBody UserDTO login) {
        validRegister(login);
        User ob = new User(login);
        ob.setPassword(encoder.encode(login.password1()));
        Long id = service.save(ob);

        return ResponseEntity.ok().body("Sucesso");
    }

    private void validLogin(LoginDTO login) {
        ValidationError v = new ValidationError();
        if (login.login() == null || login.login().isBlank()) {
            v.addErrors("login", "The Login can not be empty!");
        }

        if (login.password() == null || login.password().isBlank()) {
            v.addErrors("password", "The Password can not be empty!");
        }

        if (v.hasErrors()) {
            throw new ValidException("Campos Obrigatórios", v);
        }
    }

    private void validRegister(UserDTO login) {

        ValidationError errors = new ValidationError();
        if (login.login() == null || login.login().isBlank()) {
            errors.addErrors("login", "The Login can not be empty!");
        }

        if (login.name() == null || login.name().isBlank()) {
            errors.addErrors("name", "The Name can not be empty!");
        }

        if (login.password1() == null || login.password1().isBlank()) {
            errors.addErrors("password1", "The Password can not be empty!");
        }

        if (login.password2() == null || login.password2().isBlank()) {
            errors.addErrors("password2", "Repeat the Password!");
        }

        if (login.email() == null || login.email().isBlank()) {
            errors.addErrors("email", "The e-mail can not be empty!");
        }

        if (login.password1() != null && !login.password1().equals(login.password2())) {
            errors.addErrors("", "The passwords aren't equals!");
        }

        if (errors.hasErrors()) {
            throw new ValidException("Campos Obrigatórios", errors);
        }
    }
}
