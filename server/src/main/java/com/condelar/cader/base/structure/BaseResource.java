package com.condelar.cader.base.structure;

import com.condelar.cader.base.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.List;

public class BaseResource<Entity extends BaseEntity, Service extends BaseService> {

    @Autowired
    private Service service;

    private User getUser() {
        return (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }


    @GetMapping("/")
    public List<Entity> list() {
        User user = getUser();
        Entity ob = (Entity) service.instance();
        ob.setUser(user);
        return service.list(ob);
    }

    @GetMapping("/{id}")
    public Entity get(@PathVariable Long id) {
        User user = getUser();
        Entity ob = (Entity) service.instance();
        ob.setUser(user);
        ob.setId(id);
        return (Entity) service.find(ob);
    }

    @GetMapping("/combo")
    public List<String> combp() {
        User user = getUser();
        Entity ob = (Entity) service.instance();
        ob.setUser(user);
        List<String> res = new ArrayList<>();
        service.list(ob).forEach(i -> {
            Entity e = (Entity) i;
        });

        return res;
    }
}
