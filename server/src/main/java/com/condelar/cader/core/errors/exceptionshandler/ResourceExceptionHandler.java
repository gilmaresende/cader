package com.condelar.cader.core.errors.exceptionshandler;

import com.condelar.cader.core.errors.exceptions.*;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.sql.SQLException;
import java.sql.SQLIntegrityConstraintViolationException;

@ControllerAdvice
public class ResourceExceptionHandler {

    @ExceptionHandler(ValidException.class)
    public ResponseEntity<StandardError> validationErros(ValidException ex,
                                                         HttpServletRequest request) {
        ex.getErros().setTimestamp(System.currentTimeMillis());
        ex.getErros().setStatus(HttpStatus.BAD_REQUEST.value());
        ex.getErros().setError("validation error");
        ex.getErros().setMessage(ex.getMessage());
        ex.getErros().setPath(request.getRequestURI());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getErros());
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

    @ExceptionHandler(ObjectNotFoundException.class)
    public ResponseEntity<StandardError> objNotFound(ObjectNotFoundException ex,
                                                     HttpServletRequest request) {
        StandardError error = new StandardError(System.currentTimeMillis(), HttpStatus.BAD_REQUEST.value(),
                "Data not found", ex.getMessage(), request.getRequestURI());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
    }

    @ExceptionHandler(UpdateException.class)
    public ResponseEntity<StandardError> update(UpdateException ex,
                                                HttpServletRequest request) {
        StandardError error = new StandardError(System.currentTimeMillis(), HttpStatus.BAD_REQUEST.value(),
                "The Data has changed at another time", ex.getMessage(), request.getRequestURI());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
    }

    @ExceptionHandler(SaveException.class)
    public ResponseEntity<StandardError> save(SaveException ex,
                                              HttpServletRequest request) {
        StandardError error = new StandardError(System.currentTimeMillis(), HttpStatus.BAD_REQUEST.value(),
                "The Data can not is saved", ex.getMessage(), request.getRequestURI());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
    }

    @ExceptionHandler(NotIsRegisterException.class)
    public ResponseEntity<StandardError> notIsRegister(NotIsRegisterException ex,
                                                       HttpServletRequest request) {
        StandardError error = new StandardError(System.currentTimeMillis(), HttpStatus.BAD_REQUEST.value(),
                "The data not's combo type!", ex.getMessage(), request.getRequestURI());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
    }

    @ExceptionHandler(SessionExceptionImpl.class)
    public ResponseEntity<StandardError> errorSessionException(SessionExceptionImpl ex,
                                                               HttpServletRequest request) {
        StandardError error = new StandardError(System.currentTimeMillis(), HttpStatus.BAD_REQUEST.value(),
                "The data not's combo type!", ex.getMessage(), request.getRequestURI());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
    }


}
