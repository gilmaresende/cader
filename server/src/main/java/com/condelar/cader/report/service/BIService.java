package com.condelar.cader.report.service;

import com.condelar.cader.core.errors.exceptions.ObjectNotFoundException;
import com.condelar.cader.app.dto.bi.BIDataDTO;
import com.condelar.cader.app.dto.bi.BIDTOList;
import com.condelar.cader.app.entiti.BI;
import com.condelar.cader.app.repositories.BIRepository;
import com.condelar.cader.toollibs.ggson.GJsonImp;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

//@Service
public class BIService {

    @Autowired
    private BIRepository biRepository;

    public BI toOb(BIDataDTO dto) {
        String body = GJsonImp.getInstance().toString(dto);
        BI bi = new BI();
        bi.setName(dto.getName());
        bi.setBody(body.getBytes());
        return bi;
    }

    public BIDataDTO toDTO(BI bi) {
        BIDataDTO dto = GJsonImp.toObject(BIDataDTO.class, new String(bi.getBody()));
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
        all.forEach(bi -> allDTO.add(new BIDTOList(bi)));
        return allDTO;
    }

    public BI getById(Long id) {
        Optional<BI> biOp = biRepository.findById(id);
        BI bi = biOp.orElseThrow(() -> new ObjectNotFoundException("Report not found"));
        return bi;
    }
}
