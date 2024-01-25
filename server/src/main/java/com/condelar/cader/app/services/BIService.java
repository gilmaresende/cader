package com.condelar.cader.app.services;

import com.condelar.cader.app.constants.enuns.EnumTypeParameter;
import com.condelar.cader.app.dto.bi.*;
import com.condelar.cader.app.entiti.BI;
import com.condelar.cader.app.repositories.BIRepository;
import com.condelar.cader.app.valid.BIValid;
import com.condelar.cader.core.errors.exceptions.ObjectNotFoundException;
import com.condelar.cader.core.otherdto.DescriptionStr;
import com.condelar.cader.core.structure.BaseService;
import com.condelar.cader.core.structure.RegisterEntity;
import com.condelar.cader.tool.csv.ToolCsv;
import com.condelar.cader.tool.util.ToolDate;
import com.condelar.cader.toollibs.ggson.GJsonImp;
import com.condelar.cader.toollibs.hibernet.QueryExecutor;
import com.condelar.cader.toollibs.hibernet.QueryHqlService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class BIService extends BaseService<BI, BIDTO, BIFilterDTO, BIListDTO, BIRepository, BIValid> {

    @Autowired
    private QueryHqlService serviceQuery;

    @Override
    public BI instance() {
        return new BI();
    }

    @Override
    public BI toEntity(BI ob, BIDTO str) {
        ob.setName(str.getName());
        ob.setBody(str.getData().getBytes());
        return ob;
    }

    @Override
    public List<BI> list(BI base) {
        return getRepo().findAll();
    }

    @Override
    public BIDTO toDTO(BI ob) {
        return new BIDTO(ob);
    }

    @Override
    public List<BI> filter(BIFilterDTO ob) {
        return getRepo().getBIs().stream().map(m -> new BI(m)).collect(Collectors.toList());
    }

    @Override
    public BIListDTO toListItem(BI ob) {
        return new BIListDTO(ob);
    }

    @Override
    public BIValid getValid() {
        return new BIValid();
    }

    @Override
    public BI find(BI base) {
        Optional<BI> biOp = getRepo().findById(base.getId());
        BI bi = biOp.orElseThrow(() -> new ObjectNotFoundException("Report not found"));
        return bi;
    }

    public List<DescriptionStr> findComboReport(String entity) {
        StringBuilder query = new StringBuilder();
        query.append("SELECT\n");
        query.append("entity\n");
        query.append("FROM ");
        query.append(entity);
        query.append(" entity\n");
        System.out.println(query.toString());
        List list = (List) serviceQuery.executeToList(query.toString());
        List<DescriptionStr> response = new ArrayList<>();
        for (Object item : list) {
            RegisterEntity i = (RegisterEntity) item;
            response.add(new DescriptionStr(i.getId().toString(), i.toString()));
        }
        return response;
    }

    public String executeBI(BIPlayDTO data) {
        BI biBase = getById(data.getIdBI());
        BIDataDTO bi = GJsonImp.toObject(BIDataDTO.class, new String(biBase.getBody()));

        HashMap<String, String> parameterHash = new HashMap<>();
        HashMap<String, String> labelsHash = new HashMap<>();
        bi.getBIParameters().forEach(parameter -> {
            String description = "";
            String key = "";
            String value = "";

            Optional<BIParameterPlayDTO> p = data.getParameter().stream().filter(f -> f.getKey().equals(parameter.getKey())).findFirst();
            if (p.isPresent()) {
                Object par = p.get().getValue();
                key = p.get().getKey();
                if (par instanceof LinkedHashMap) {
                    LinkedHashMap map = (LinkedHashMap) par;
                    value = (String) map.get("id");
                    description = (String) map.get("description");
                } else {
                    if (parameter.getTypePrimitive().getId().equals("LOCAL_DATE")) {
                        Long dat = (Long) par;
                        if (dat != null)
                            value = dat.toString();
                        else {
                            value = System.currentTimeMillis() + "";
                        }
                    } else {
                        value = (String) par;
                    }
                }
                parameterHash.put(key, value);
                labelsHash.put(key, description);
            }
        });

        QueryExecutor query = serviceQuery.newQuery(bi.getQuery().getData());

        bi.getBIParameters().forEach(parameter -> {
            if (parameter.getTypePrimitive().getId().equals("LOCAL_DATE")) {
                String time = parameterHash.get(parameter.getKey());
                LocalDate localDate = ToolDate.convertLongToLocalDate(Long.parseLong(time));
                query.setParameter(parameter.getKey(), localDate);
            } else {
                query.setParameter(parameter.getKey(), parameterHash.get(parameter.getKey()));
            }
        });

        List<Map> dataResult = query.executeToMap();

        return ToolCsv.mapToCsv(dataResult);
    }
}

