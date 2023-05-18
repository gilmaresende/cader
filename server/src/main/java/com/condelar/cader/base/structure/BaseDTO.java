package com.condelar.cader.base.structure;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.springframework.beans.BeanUtils;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
public abstract class BaseDTO implements Serializable {

    private Long id;

    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private LocalDateTime update;

    public BaseDTO(BaseEntity ob){
        BeanUtils.copyProperties(ob, this);
    }

    public BaseDTO(){
    }
}
