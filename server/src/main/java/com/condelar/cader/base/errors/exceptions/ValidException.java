package com.condelar.cader.base.errors.exceptions;

import com.condelar.cader.base.errors.msgerror.ValidErrors;

public class ValidException extends RuntimeException {

    ValidErrors erros;

    public ValidException(String msg, ValidErrors erros) {
        super(msg);
        this.erros = erros;
    }

    public ValidErrors getErros() {
        return erros;
    }
}
