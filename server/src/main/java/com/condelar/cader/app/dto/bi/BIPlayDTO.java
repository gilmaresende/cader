package com.condelar.cader.app.dto.bi;

import lombok.Data;

import java.util.LinkedHashMap;
import java.util.List;

@Data
public class BIPlayDTO {
    private Long idBI;
    private List<BIParameterPlayDTO> parameter;
    // private List<LinkedHashMap> parameter;
}
