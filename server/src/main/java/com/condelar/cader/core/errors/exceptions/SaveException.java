package com.condelar.cader.core.errors.exceptions;

import org.hibernate.PropertyValueException;
import org.springframework.orm.jpa.JpaSystemException;

public class SaveException extends RuntimeException{

    public SaveException(JpaSystemException e) {
        super(e.getCause().getCause().getMessage());
    }

    public SaveException(String e) {
        super(e);
    }
}
