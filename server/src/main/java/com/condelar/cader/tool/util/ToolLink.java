package com.condelar.cader.tool.util;

import com.condelar.cader.core.structure.BaseEntity;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

public class ToolLink {

    public static URI createURI(BaseEntity ob) {
        if (ob == null) {
            URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                    .buildAndExpand().toUri();
            return uri;
        }
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(ob.getId()).toUri();
        return uri;
    }
}
