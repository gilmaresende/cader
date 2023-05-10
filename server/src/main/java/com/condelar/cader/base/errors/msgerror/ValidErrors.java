package com.condelar.cader.base.errors.msgerror;

import com.condelar.cader.base.errors.exceptionshandler.FieldMessage;

import java.util.ArrayList;
import java.util.List;

public class ValidErrors {

    private List<FieldMessage> errorFilds = new ArrayList<>();


    public void addErro(String fild, String msg) {
        errorFilds.add(new FieldMessage(fild, msg));
    }

    public List<FieldMessage> getErrorFilds() {
        return errorFilds;
    }

    public Boolean getHasError() {
        return !errorFilds.isEmpty();
    }
}
