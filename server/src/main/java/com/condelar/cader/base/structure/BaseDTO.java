package com.condelar.cader.base.structure;

import lombok.Data;
import org.springframework.beans.BeanUtils;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
public abstract class BaseDTO implements Serializable {

    private Long id;

    private LocalDateTime update;

    public BaseDTO(BaseEntity ob){
        BeanUtils.copyProperties(ob, this);
    }

    public BaseDTO(){
    }
}
