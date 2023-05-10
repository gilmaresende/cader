package com.condelar.cader.base.structure;

import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
public class BaseDTO implements Serializable {

    private Long id;

    private LocalDateTime update;
}
