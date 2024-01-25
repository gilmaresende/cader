package com.condelar.cader.core.dto;

public record UserDTO(
        String login,
        String name,
        String password1,
        String password2,
        String email) {

}
