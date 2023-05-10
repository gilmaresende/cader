package com.condelar.cader.base.dto;

public record UserDTO(
        String login,
        String name,
        String password1,
        String password2,
        String email) {

}
