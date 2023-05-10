package com.condelar.cader.base.structure;

import com.condelar.cader.base.domain.User;

public abstract class BaseEntity {

    public abstract Long getId();

    public abstract void setId(Long id);

    public abstract User getUser();

    public abstract void setUser(User user);

}
