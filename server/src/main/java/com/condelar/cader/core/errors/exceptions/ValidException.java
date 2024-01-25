package com.condelar.cader.core.errors.exceptions;

import com.condelar.cader.core.errors.exceptionshandler.ValidationError;

public class ValidException extends RuntimeException {

    ValidationError erros;

    public ValidException(String msg, ValidationError erros) {
        super(msg);
        this.erros = erros;
    }

    public ValidationError getErros() {
        return erros;
    }
}
