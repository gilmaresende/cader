package com.condelar.cader.tool.download;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;

public class ToolDownload {
    public static HttpEntity<byte[]> getFile(String fileName, String extension, byte[] bytes) {
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Content-Disposition", "attachment;filename=\"" + fileName + "." + extension + "\"");
        HttpEntity<byte[]> entity = new HttpEntity<byte[]>(bytes, httpHeaders);
        return entity;
    }
}
