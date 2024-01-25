package com.condelar.cader.toollibs.hibernet;

import jakarta.persistence.Query;
import org.hibernate.transform.Transformers;

import java.util.List;
import java.util.Map;

public class QueryExecutor {

    Query query;

    public QueryExecutor(Query query) {
        this.query = query;
    }

    public void setParameter(String key, Object value) {
        this.query.setParameter(key, value);
    }

    public List<Map> executeToMap() {
        query.unwrap(org.hibernate.query.Query.class).
                setTupleTransformer(Transformers.ALIAS_TO_ENTITY_MAP);

        List<Map> listMap = query.getResultList();
        return listMap;
    }

}
