package com.condelar.cader.core.structure;

import com.condelar.cader.core.domain.User;
import com.condelar.cader.core.errors.exceptions.NotIsRegisterException;
import com.condelar.cader.core.errors.exceptions.UpdateException;
import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.structure.util.PackageDT;
import com.condelar.cader.toollibs.reflection.EntityScanner;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class BaseController<Entity extends BaseEntity,
        DTO extends BaseDTO,
        FilterDTO extends BaseDTO,
        ListDTO extends BaseDTO,
        Repos extends JpaRepository,
        Service extends BaseService<Entity, DTO, FilterDTO, ListDTO, Repos, Valid>,
        Valid extends BaseValid<DTO, Entity>> {

    @Autowired
    private Service service;

    public Service getService() {
        return service;
    }

    @Autowired
    private Valid valid;

    public Valid getValid() {
        return this.valid;
    }

    private User getUser() {
        return (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

    @GetMapping("/{id}")
    public ResponseEntity<PackageDT<DTO>> get(@PathVariable Long id) {

        EntityScanner es = new EntityScanner();
        es.scanEntities();


        Entity ob = service.instance();
        if (ob instanceof RegisterEntity)
            ((RegisterEntity) ob).setActive(null);
        ob.setId(id);
        ob = service.find(ob);
        DTO dto = service.toDTO(ob);
        dto.setUpdate(ob.getUpdate());
        PackageDT<DTO> pack = new PackageDT();
        pack.setData(dto);
        return ResponseEntity.ok().body(pack);
    }

    @PostMapping
    public ResponseEntity<PackageDT<DTO>> save(@RequestBody DTO data) {
        valid.clear();
        valid.validDtoToSave(data);
        valid.hasError();
        Entity ob = service.instance();
        replayEquals(ob, data);
        data.setId(null);
        ob = service.toEntity(ob, data);
        ob.setRegister(LocalDate.now());
        ob.setUser(getUser());
       // ob = service.beforeSave(ob);
        ob = service.save(ob);

        PackageDT<DTO> pack = new PackageDT();
        pack.setRotaOb(createURI(ob).getPath());
        pack.setMessage("Saved record");
        return ResponseEntity.ok().body(pack);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PackageDT<DTO>> update(@PathVariable Long id, @RequestBody DTO data) {
        valid.clear();
        valid.validDtoToSave(data);
        valid.hasError();
        Entity ob = service.instance();
        if (ob instanceof RegisterEntity)
            ((RegisterEntity) ob).setActive(null);
        ob.setUser(getUser());
        ob.setId(id);
        ob = service.find(ob);
        if (ob.getUpdate().equals(data.getUpdate())) {
            replayEquals(ob, data);
            ob = service.toEntity(ob, data);
           // ob = service.beforeSave(ob);
            ob = service.save(ob);
            PackageDT<DTO> pack = new PackageDT();
            pack.setUpdate(ob.getUpdate());
            pack.setMessage("Updated record");
            return ResponseEntity.ok().body(pack);
        }
        throw new UpdateException("Update in: " + ob.getUpdate());
    }

    @GetMapping("/combo")
    public ResponseEntity<PackageDT> combo() {
        User user = getUser();
        Entity ob = service.instance();
        if (ob instanceof RegisterEntity) {
            ob.setUser(user);
            List<DescriptionId> res = new ArrayList<>();
            ((RegisterEntity) ob).setActive(null);
            service.list(ob).forEach(e -> res.add(new DescriptionId((RegisterEntity) e)));
            PackageDT pack = new PackageDT();
            pack.setItemsCombo(res);
            return ResponseEntity.ok().body(pack);
        }
        throw new NotIsRegisterException("Type: " + ob.getClass().getName());
    }

    @PostMapping("/list")
    public ResponseEntity<PackageDT<ListDTO>> filter(@RequestBody FilterDTO filter) {
        PackageDT<ListDTO> res = new PackageDT<ListDTO>();
        Entity ob = service.instance();
        if (ob instanceof RegisterEntity) {
            ob.setUser(getUser());
            ((RegisterEntity) ob).setActive(null);
            List<Entity> list = service.list(ob);
            Collections.sort(list);
            List<ListDTO> listDTO = list.stream().map(m -> {
                ListDTO i = service.toListItem(m);
                i.setUpdate(m.getUpdate());
                return i;
            }).collect(Collectors.toList());
            res.setDatas(listDTO);
        } else {
            List<Entity> list = service.filter(filter);
            List<ListDTO> listDTO = list.stream().map(m -> {
                ListDTO i = service.toListItem(m);
                i.setUpdate(m.getUpdate());
                return i;
            }).collect(Collectors.toList());
            res.setDatas(listDTO);
            return ResponseEntity.ok().body(res);
        }
        if (res.getDatas().isEmpty()) {

        }
        return ResponseEntity.ok().body(res);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<PackageDT<DTO>> delete(@PathVariable Long id) {
        Entity ob = service.instance();
        ob.setUser(getUser());
        ob.setId(id);
        ob = service.find(ob);
        service.delete(ob);

        PackageDT<DTO> res = new PackageDT<DTO>();
        res.setMessage("Deleted record!");
        return ResponseEntity.ok().body(res);
    }

    private URI createURI(Entity ob) {
        if (ob == null) {
            URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                    .buildAndExpand().toUri();
            return uri;
        }
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(ob.getId()).toUri();
        return uri;
    }

    private void replayEquals(Entity ob, DTO dto) {
        BeanUtils.copyProperties(dto, ob);
    }
}
