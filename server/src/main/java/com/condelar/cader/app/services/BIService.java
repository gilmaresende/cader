package com.condelar.cader.app.services;

import com.condelar.cader.app.constants.enuns.ConstBIPrimitiveOrEntity;
import com.condelar.cader.app.constants.enuns.ConstBITypePrimitive;
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

    public String executeBI(LinkedHashMap data) {
        Object idOb = data.get("id");
        Long idBI = Long.parseLong(idOb.toString());
        System.out.println(idBI);

        BI biBase = getById(idBI);

        BIDataDTO bi = GJsonImp.toObject(BIDataDTO.class, new String(biBase.getBody()));

        HashMap<String, Object> parameters = new HashMap<>();

        StringBuilder descriptionParameterLabel = new StringBuilder();
        bi.getBIParameters().forEach(parameter -> {
            String keyParameter = parameter.getKey();
            String descriptionParameter = parameter.getName();
            Object value = data.get(keyParameter);
            System.out.println("-" + keyParameter + "-" + value + "-" + descriptionParameter);

            descriptionParameterLabel.append(descriptionParameter);
            descriptionParameterLabel.append(": ");
            if (ConstBIPrimitiveOrEntity.ENTITY.equals(parameter.getTypePrimitiveOrEntity().getId())) {
                LinkedHashMap valueLink = (LinkedHashMap) value;
                String description = (String) valueLink.get("description");
                descriptionParameterLabel.append(description).append(" | ");
                String id = (String) valueLink.get("id");
                parameters.put(keyParameter, id);
            } else if (parameter.getCustomized()) {
                LinkedHashMap valueLink = (LinkedHashMap) value;
                String description = (String) valueLink.get("description");
                descriptionParameterLabel.append(description).append(" | ");
                String id = (String) valueLink.get("id");

                if (ConstBITypePrimitive.INTEGER.equals(parameter.getTypePrimitive().getId())) {
                    parameters.put(keyParameter, Integer.parseInt(id));
                } else if (ConstBITypePrimitive.DOUBLE.equals(parameter.getTypePrimitive().getId())) {
                    parameters.put(keyParameter, Double.parseDouble(id));
                } else if (ConstBITypePrimitive.STRING.equals(parameter.getTypePrimitive().getId())) {
                    parameters.put(keyParameter, id);
                }
            } else {
                Object valuePrimitive = value;
                if (ConstBITypePrimitive.INTEGER.equals(parameter.getTypePrimitive().getId())) {
                    parameters.put(keyParameter, Integer.parseInt(valuePrimitive.toString()));
                } else if (ConstBITypePrimitive.DOUBLE.equals(parameter.getTypePrimitive().getId())) {
                    parameters.put(keyParameter, Double.parseDouble(valuePrimitive.toString()));
                } else if (ConstBITypePrimitive.STRING.equals(parameter.getTypePrimitive().getId())) {
                    parameters.put(keyParameter, valuePrimitive.toString());
                } else {
                    LocalDate date = ToolDate.strToLocal(valuePrimitive.toString());
                    parameters.put(keyParameter, date);
                    System.out.println(date);
                }
            }
        });

        QueryExecutor query = serviceQuery.newQuery(bi.getQuery().getData());

        bi.getBIParameters().forEach(parameter -> {
            if (bi.getQuery().getData().contains(":" + parameter.getKey()))
                query.setParameter(parameter.getKey(), parameters.get(parameter.getKey()));
        });

        List<Map> dataResult = query.executeToMap();
        return ToolCsv.mapToCsv(dataResult);
    }
}

