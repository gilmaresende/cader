package com.condelar.cader.core.structure;

import com.condelar.cader.core.domain.User;

import java.time.LocalDate;
import java.time.LocalDateTime;

public abstract class BaseEntity {

    public abstract Long getId();

    public abstract void setId(Long id);

    public abstract User getUser();

    public abstract void setUser(User user);

    public abstract LocalDateTime getUpdate();

    public abstract void setUpdate(LocalDateTime update);

    public abstract LocalDate getRegister();

    public abstract void setRegister(LocalDate register);

}
