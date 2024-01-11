package com.condelar.cader.toollibs.hibernet;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import jakarta.persistence.Query;
import org.hibernate.transform.Transformers;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class QueryHqlService {

    @Value("${spring.datasource.url}")
    private String url;

    @Value("${spring.datasource.username}")
    private String user;

    @Value("${spring.datasource.password}")
    private String password;

    public Object executeToList(String queryHQL) {
        Query query = createdQuery(queryHQL);
        List ob = query.getResultList();
        return ob;
    }

    public Object executeToObject(String queryHQL) {
        Query query = createdQuery(queryHQL);
        query.setMaxResults(1);
        Object ob = query.getSingleResult();
        return ob;
    }

    public List<Map> executeToMap(String queryHQL) {
        Query query = createdQuery(queryHQL);

        query.unwrap(org.hibernate.query.Query.class).
                setTupleTransformer(Transformers.ALIAS_TO_ENTITY_MAP);

        List<Map> listMap = query.getResultList();
        return listMap;
    }

    private Map<String, String> getApplicationData() {
        Map<String, String> properties = new HashMap<>();

        properties.put("javax.persistence.jdbc.url", url);
        properties.put("javax.persistence.jdbc.user", user);
        properties.put("javax.persistence.jdbc.password", password);

        return properties;
    }

    private Query createdQuery(String queryHQL) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("cader", getApplicationData());
        EntityManager em = emf.createEntityManager();
        Query query = em.createQuery(queryHQL);
        return query;
    }

    public QueryExecutor newQuery(String queryHQL) {
        return new QueryExecutor(createdQuery(queryHQL));
    }


}
