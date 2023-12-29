package com.condelar.cader.report.service;

import com.condelar.cader.report.dto.BIDTO;
import com.condelar.cader.report.entity.BI;
import com.condelar.cader.report.repository.BIRepository;
import com.condelar.cader.toollibs.ggson.GJsonImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BIService {

    @Autowired
    private BIRepository biRepository;

    public BIDTO save(BIDTO dto) {
        String body = GJsonImp.getInstance().toString(dto);

        BI bi = new BI();
        bi.setName(dto.getName());
        bi.setBody(body.getBytes());

        bi = biRepository.save(bi);
        dto.setId(bi.getId());
        return dto;
    }

}
