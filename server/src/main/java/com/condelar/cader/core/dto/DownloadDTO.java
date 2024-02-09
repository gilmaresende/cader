package com.condelar.cader.core.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class DownloadDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String name;

    private String extension;

    private byte[] body;

    public DownloadDTO(String name, String extension, byte[] body) {
        super();
        this.name = name;
        this.extension = extension;
        this.body = body;
    }

}
