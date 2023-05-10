package com.condelar.cader.base.structure;

import com.condelar.cader.base.domain.User;

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
