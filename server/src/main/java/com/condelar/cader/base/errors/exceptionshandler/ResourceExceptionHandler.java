package com.condelar.cader.base.errors.exceptionshandler;

import com.condelar.cader.base.errors.exceptions.ValidException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.sql.SQLException;
import java.sql.SQLIntegrityConstraintViolationException;

@ControllerAdvice
public class ResourceExceptionHandler {

    @ExceptionHandler(ValidException.class)
    public ResponseEntity<StandardError> validationErros(ValidException ex,
                                                         HttpServletRequest request) {
        ValidationError errors = new ValidationError(System.currentTimeMillis(), HttpStatus.BAD_REQUEST.value(),
                "Erro na Validação", ex.getMessage(), request.getRequestURI());

        for (FieldMessage x : ex.getErros().getErrorFilds()) {
            errors.addErrors(x.getFildName(), x.getMessage());
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);

    }

    @ExceptionHandler(SQLIntegrityConstraintViolationException.class)
    public ResponseEntity<StandardError> sqlErros(SQLIntegrityConstraintViolationException ex,
                                                  HttpServletRequest request) {
        StandardError error = new StandardError(System.currentTimeMillis(), HttpStatus.BAD_REQUEST.value(),
                "Error Data Base", ex.getMessage(), request.getRequestURI());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
    }

    @ExceptionHandler(SQLException.class)
    public ResponseEntity<StandardError> sqlErros(SQLException ex,
                                                  HttpServletRequest request) {
        StandardError error = new StandardError(System.currentTimeMillis(), HttpStatus.BAD_REQUEST.value(),
                "Error Data Base", ex.getMessage(), request.getRequestURI());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
    }

}
