package com.condelar.cader.base.securyti.resources;

import com.condelar.cader.base.domain.User;
import com.condelar.cader.base.dto.LoginDTO;
import com.condelar.cader.base.dto.UserDTO;
import com.condelar.cader.base.errors.exceptions.ValidException;
import com.condelar.cader.base.errors.msgerror.ValidErrors;
import com.condelar.cader.base.securyti.services.TokenService;
import com.condelar.cader.base.securyti.services.UserService;
import jakarta.validation.Valid;
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
    public ResponseEntity toRegister(@Valid @RequestBody UserDTO login) {
        validRegister(login);
        User ob = new User(login);
        ob.setPassword(encoder.encode(login.password1()));
        Long id = service.save(ob);

        return ResponseEntity.ok().body("Sucesso");
    }

    private void validLogin(LoginDTO login) {
        ValidErrors errors = new ValidErrors();
        if (login.login() == null || login.login().isBlank()) {
            errors.addErro("", "Login can not be empty!");
        }

        if (login.password() == null || login.password().isBlank()) {
            errors.addErro("", "Password can not be empty!");
        }

        if (errors.getHasError()) {
            throw new ValidException("Campos Obrigatórios", errors);
        }
    }

    private void validRegister(UserDTO login) {

        ValidErrors errors = new ValidErrors();
        if (login.login() == null || login.login().isBlank()) {
            errors.addErro("login", "Login can not be empty!");
        }

        if (login.name() == null || login.name().isBlank()) {
            errors.addErro("name", "Name can not be empty!");
        }

        if (login.password1() == null || login.password1().isBlank()) {
            errors.addErro("password1", "Password can not be empty!");
        }

        if (login.password2() == null || login.password2().isBlank()) {
            errors.addErro("password1", "Repeat the Password!");
        }

        if (login.email() == null || login.email().isBlank()) {
            errors.addErro("email", "e-mail can not be empty!");
        }

        if (login.password1() != null && !login.password1().equals(login.password2())) {
            errors.addErro("password", "The passwords aren't equals!");
        }

        if (errors.getHasError()) {
            throw new ValidException("Campos Obrigatórios", errors);
        }
    }
}
