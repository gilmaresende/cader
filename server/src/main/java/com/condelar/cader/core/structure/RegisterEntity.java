package com.condelar.cader.core.structure;

import com.condelar.cader.core.otherdto.DescriptionId;

public interface RegisterEntity {

    Short getActive();

    void setActive(Short active);

    Long getId();

    void setId(Long id);

    default DescriptionId getDescriptionId(){
        return new DescriptionId(this);
    }
}
