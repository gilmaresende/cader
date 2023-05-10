package com.condelar.cader.base.errors.exceptions;

import org.springframework.orm.jpa.JpaSystemException;

public class SaveException extends RuntimeException{

    public SaveException(JpaSystemException e) {
        super(e.getCause().getCause().getMessage());
    }

    public SaveException(String e) {
        super(e);
    }
}
