package com.condelar.cader.report.service;

import com.condelar.cader.core.errors.exceptions.ObjectNotFoundException;
import com.condelar.cader.report.dto.BIDTO;
import com.condelar.cader.report.dto.BIDTOList;
import com.condelar.cader.report.entity.BI;
import com.condelar.cader.report.repository.BIRepository;
import com.condelar.cader.toollibs.ggson.GJsonImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BIService {

    @Autowired
    private BIRepository biRepository;

    public BI toOb(BIDTO dto) {
        String body = GJsonImp.getInstance().toString(dto);
        BI bi = new BI();
        bi.setName(dto.getName());
        bi.setBody(body.getBytes());
        return bi;
    }

    public BIDTO toDTO(BI bi){
        BIDTO dto = GJsonImp.toObject(BIDTO.class, new String(bi.getBody()));
        dto.setId(bi.getId());
        return dto;
    }

    public BI save(BI bi) {
        bi = biRepository.save(bi);
        return bi;
    }

    public List<BIDTOList> getAll() {
        List<BIDTOList> allDTO = new ArrayList<>();
        List<BI> all = biRepository.findAll();
        all.forEach(bi -> {
            //BIDTO dto = GJsonImp.toObject(BIDTO.class, new String(bi.getBody()));
            allDTO.add(new BIDTOList(bi));
        });
        return allDTO;
    }

    public BI getById(Long id) {
        Optional<BI> biOp = biRepository.findById(id);
        BI bi = biOp.orElseThrow(() -> new ObjectNotFoundException("Report not found"));
        return bi;
    }
}
