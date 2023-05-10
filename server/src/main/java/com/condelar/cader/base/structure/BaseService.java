package com.condelar.cader.base.structure;

import com.condelar.cader.base.domain.User;
import com.condelar.cader.base.errors.exceptions.ObjectNotFoundException;
import com.condelar.cader.base.errors.exceptions.SaveException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.orm.jpa.JpaSystemException;

import java.util.List;
import java.util.Optional;

public abstract class BaseService<
        Entity extends BaseEntity,
        DTO extends BaseDTO,
        FilterDTO extends BaseDTO,
        ListDTO extends BaseDTO,
        Repository extends JpaRepository,
        Valid extends BaseValid<DTO, Entity>> {

    @Autowired
    Repository repository;

    @Autowired
    Valid valid;

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

    public Entity save(Entity ob) {
        valid.clear();
        valid.validObject(ob);
        valid.hasError();
        try {
            return (Entity) repository.save(ob);
        } catch (JpaSystemException e) {
            throw new SaveException(e);
        }
    }

    public abstract Entity instance();

    public abstract Entity toEntity(Entity ob, DTO dto);

    public abstract DTO toDTO(Entity ob);


    public abstract List<Entity> filter(FilterDTO ob, User user);

    public abstract ListDTO toListItem(Entity ob);

}
