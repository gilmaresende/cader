package com.condelar.cader.app.valid;

import com.condelar.cader.app.dto.bi.BIDTO;
import com.condelar.cader.app.entiti.BI;
import com.condelar.cader.core.structure.BaseValid;
import org.springframework.stereotype.Component;

//@Component
public class BIValid extends BaseValid<BIDTO, BI> {

    @Override
    public void validDtoToSave(BIDTO dto) {
       
    }

    @Override
    public void validObject(BI ob) {

    }

    @Override
    public void validDelete(BI ob) {

    }
}

