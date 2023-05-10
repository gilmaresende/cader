package com.condelar.cader.base.structure;

import com.condelar.cader.base.errors.exceptions.ValidException;
import com.condelar.cader.base.errors.exceptionshandler.ValidationError;
import com.condelar.cader.base.structure.util.FunctionValid;

public abstract class BaseValid<DTO extends BaseDTO, Entity extends BaseEntity> extends FunctionValid {

    ValidationError errors;

    public abstract void validDtoToSave(DTO dto);

    public abstract void validObject(Entity ob);

    public ValidationError getErrors() {
        return errors;
    }

    public void addErrors(String field, String message) {
        errors.addErrors(field, message);
    }

    public void clear() {
        this.errors = new ValidationError();
    }

    public void hasError() {
        if (!errors.getErrors().isEmpty()) {
            throw new ValidException("Required fields", errors);
        }
    }
}
