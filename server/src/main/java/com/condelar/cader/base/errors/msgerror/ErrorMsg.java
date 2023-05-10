package com.condelar.cader.base.errors.msgerror;

public class ErrorMsg {

    private StringBuilder sb = new StringBuilder();

    private Boolean hasError = false;

    public void addErro(String str) {
        this.hasError = true;
        this.sb.append(str).append("\n");
    }

    @Override
    public String toString() {
        return sb.toString();
    }

    public Boolean getHasError() {
        return hasError;
    }
}
