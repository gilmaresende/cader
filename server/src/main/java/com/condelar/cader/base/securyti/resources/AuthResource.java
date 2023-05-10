package com.condelar.cader.base.securyti.resources;

import com.condelar.cader.base.domain.User;
import com.condelar.cader.base.dto.LoginDTO;
import com.condelar.cader.base.dto.UserDTO;
import com.condelar.cader.base.errors.exceptions.ValidException;
import com.condelar.cader.base.errors.msgerror.ErrorMsg;
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
import org.springframework.web.bind.annotation.RestController;

@RestController
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
        ErrorMsg erros = new ErrorMsg();
        if (login.login() == null || login.login().isBlank()) {
            erros.addErro("Login can not be empty!");
        }

        if (login.password() == null || login.password().isBlank()) {
            erros.addErro("Password can not be empty!");
        }

        if (erros.getHasError()) {
            throw new ValidException(erros.toString());
        }
    }

    private void validRegister(UserDTO login) {

        ErrorMsg erros = new ErrorMsg();
        if (login.login() == null || login.login().isBlank()) {
            erros.addErro("Login can not be empty!");
        }

        if (login.name() == null || login.name().isBlank()) {
            erros.addErro("Name can not be empty!");
        }

        if (login.password1() == null || login.password1().isBlank()) {
            erros.addErro("Password can not be empty!");
        }

        if (login.password2() == null || login.password2().isBlank()) {
            erros.addErro("Repeat the Password!");
        }

        if (login.email() == null || login.email().isBlank()) {
            erros.addErro("e-mail can not be empty!");
        }

        if (login.password1() != null && !login.password1().equals(login.password2())) {
            erros.addErro("The passwords aren't equals!");
        }

        if (erros.getHasError()) {
            throw new ValidException(erros.toString());
        }
    }
}
