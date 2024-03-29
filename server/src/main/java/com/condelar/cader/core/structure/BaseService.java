package com.condelar.cader.core.structure;

import com.condelar.cader.app.valid.BIValid;
import com.condelar.cader.core.domain.User;
import com.condelar.cader.core.errors.exceptions.DeleteException;
import com.condelar.cader.core.errors.exceptions.ObjectNotFoundException;
import com.condelar.cader.core.errors.exceptions.SaveException;
import org.hibernate.HibernateException;
import org.hibernate.engine.jdbc.spi.SqlExceptionHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.orm.jpa.JpaSystemException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.transaction.annotation.Transactional;

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

    public Repository getRepo() {
        return repository;
    }

    public User getUser() {
        return (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

    @Transactional(readOnly = true)
    public Entity get(Entity base) {
        User u = new User();
        u.setId(getUser().getId());
        base.setUser(u);
        /*o usuario é redefinidor apenas com o Id. para que na query seja considerado apenas o Id.
         * se não todos os atributos seriam analisados, inclusive, strings seriam com like
         * */
        Example example = Example.of(base, ExampleMatcher.matching()
                .withIgnoreCase()
                .withStringMatcher(ExampleMatcher.StringMatcher.CONTAINING));
        Optional<Entity> op = repository.findOne(example);
        return op.orElse(null);
    }

    @Transactional(readOnly = true)
    public Entity find(Entity base) {
        User u = new User();
        u.setId(getUser().getId());
        base.setUser(u);
        /*o usuario é redefinidor apenas com o Id. para que na query seja considerado apenas o Id.
         * se não todos os atributos seriam analisados, inclusive, strings seriam com like
         * */
        Example example = Example.of(base, ExampleMatcher.matching()
                .withIgnoreCase()
                .withStringMatcher(ExampleMatcher.StringMatcher.CONTAINING));
        Optional<Entity> op = repository.findOne(example);
        return op.orElseThrow(() -> new ObjectNotFoundException("Data not found to object of type '" + instance().getClass().getName() + "' with id '" + base.getId() + "'"));
    }

    public List<Entity> list(Entity base) {
        User u = new User();
        u.setId(getUser().getId());
        base.setUser(u);
        /*o usuario é redefinidor apenas com o Id. para que na query seja considerado apenas o Id.
         * se não todos os atributos seriam analisados, inclusive, strings seriam com like
         * */
        Example example = Example.of(base, ExampleMatcher.matching()
                .withIgnoreCase()
                .withStringMatcher(ExampleMatcher.StringMatcher.CONTAINING));
        List<Entity> list = repository.findAll(example);
        if (list.isEmpty()) {
            throw new ObjectNotFoundException("No data found to the type '" + instance().getClass().getName() + "'");
        }
        return list;
    }

    @Transactional
    public Entity save(Entity ob) {
        ob = beforeSave(ob);
        Valid valid = getValid();
        valid.clear();
        valid.validObject(ob);
        valid.hasError();
        try {
            return (Entity) repository.save(ob);
        } catch (JpaSystemException e) {
            throw new SaveException(e);
        } catch (HibernateException e) {
            throw new SaveException(e.getMessage() + e.getCause());
        } catch (Exception e) {
            throw new SaveException(e.getMessage() + e.getCause());
        }
    }

    /**
     * Função Generica para deletar registro
     *
     * @param ob
     */

    @Transactional
    public void delete(Entity ob) {
        try {
            Valid valid = getValid();
            valid.clear();
            valid.validDelete(ob);
            ob = beforeDelete(ob);
            valid.hasError();
            repository.delete(ob);
        } catch (JpaSystemException | DataIntegrityViolationException e) {
            throw new DeleteException(e.getMessage());
        }
    }

    public Entity findById(Long id) {
        Entity filter = instance();
        filter.setId(id);
        return find(filter);
    }

    public Entity getById(Long id) {
        Entity filter = instance();
        filter.setId(id);
        return get(filter);
    }

    public abstract Entity instance();

    public abstract Entity toEntity(Entity ob, DTO dto);

    public abstract DTO toDTO(Entity ob);


    public abstract List<Entity> filter(FilterDTO ob);

    public abstract ListDTO toListItem(Entity ob);

    public Entity beforeSave(Entity ob) {
        return ob;
    }

    public Entity beforeDelete(Entity ob) {
        return ob;
    }

    public abstract Valid getValid();
}
