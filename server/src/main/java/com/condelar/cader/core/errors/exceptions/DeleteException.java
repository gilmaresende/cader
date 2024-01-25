package com.condelar.cader.core.errors.exceptions;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.orm.jpa.JpaSystemException;

public class DeleteException extends RuntimeException{

    public DeleteException(JpaSystemException e) {
        super(e.getCause().getCause().getMessage());
    }

    public DeleteException(DataIntegrityViolationException e) {
        super(e.getCause().getCause().getMessage());
    }

    public DeleteException(String e) {
        super(e);
    }
}
