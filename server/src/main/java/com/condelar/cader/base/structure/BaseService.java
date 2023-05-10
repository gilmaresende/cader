package com.condelar.cader.base.structure;

import com.condelar.cader.base.errors.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public abstract class BaseService<Entity extends BaseEntity, Repository extends JpaRepository> {

    @Autowired
    Repository repository;

    public Entity get(Entity base) {
        Example example = Example.of(base, ExampleMatcher.matching()
                .withIgnoreCase()
                .withStringMatcher(ExampleMatcher.StringMatcher.CONTAINING));
        Optional<Entity> op = repository.findOne(example);
        return op.orElse(null);
    }

    public Entity find(Entity base) {
        Example example = Example.of(base, ExampleMatcher.matching()
                .withIgnoreCase()
                .withStringMatcher(ExampleMatcher.StringMatcher.CONTAINING));
        Optional<Entity> op = repository.findOne(example);
        return op.orElseThrow(() -> new ObjectNotFoundException("Data not found to object of type '" + instance().getClass().getName() + "' with id '" + base.getId() + "'"));
    }

    public List<Entity> list(Entity base) {
        Example example = Example.of(base, ExampleMatcher.matching()
                .withIgnoreCase()
                .withStringMatcher(ExampleMatcher.StringMatcher.CONTAINING));
        List<Entity> list = repository.findAll(example);
        if (list.isEmpty()) {
            throw new ObjectNotFoundException("No data found to the type '" + instance().getClass().getName() + "'");
        }
        return list;
    }

    public abstract Entity instance();
}
