package com.condelar.cader.tool.entity;

import org.springframework.beans.BeanUtils;

public class ToolEntity {

    public static void cloneAttributes(Object origin, Object target) {
        BeanUtils.copyProperties(origin, target);
    }

}
