package com.condelar.cader.core.structure;

import com.condelar.cader.core.domain.User;
import org.jetbrains.annotations.NotNull;

import java.time.LocalDate;
import java.time.LocalDateTime;

public abstract class BaseEntity implements Comparable {

    public abstract Long getId();

    public abstract void setId(Long id);

    public abstract User getUser();

    public abstract void setUser(User user);

    public abstract LocalDateTime getUpdate();

    public abstract void setUpdate(LocalDateTime update);

    public abstract LocalDate getRegister();

    public abstract void setRegister(LocalDate register);

    @Override
    public int compareTo(@NotNull Object o) {
        return this.toString().toLowerCase().compareTo(o.toString().toLowerCase());
    }
}
