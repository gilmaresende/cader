package com.condelar.cader.base.errors.exceptionshandler;

import com.condelar.cader.base.errors.exceptions.NotIsRegisterException;
import com.condelar.cader.base.errors.exceptions.ObjectNotFoundException;
import com.condelar.cader.base.errors.exceptions.UpdateException;
import com.condelar.cader.base.errors.exceptions.ValidException;
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
        ex.getErros().setError("Erro na Validação");
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
                "Dado Não Encontrado", ex.getMessage(), request.getRequestURI());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
    }

    @ExceptionHandler(UpdateException.class)
    public ResponseEntity<StandardError> update(UpdateException ex,
                                                     HttpServletRequest request) {
        StandardError error = new StandardError(System.currentTimeMillis(), HttpStatus.BAD_REQUEST.value(),
                "The Data has changed at another time", ex.getMessage(), request.getRequestURI());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
    }

    @ExceptionHandler(NotIsRegisterException.class)
    public ResponseEntity<StandardError> notIsRegister(NotIsRegisterException ex,
                                                HttpServletRequest request) {
        StandardError error = new StandardError(System.currentTimeMillis(), HttpStatus.BAD_REQUEST.value(),
                "The data not's combo type!", ex.getMessage(), request.getRequestURI());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
    }

}
