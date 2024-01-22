package com.condelar.cader.core.structure.util;

import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.structure.BaseDTO;

import java.time.LocalDateTime;
import java.util.List;

public class PackageDT<DTO> {

    String rotaOb;

    Long id;

    DTO data;

    List<DTO> datas;

    List<DescriptionId> itemsCombo;

    private String message;

    private LocalDateTime update;

    public PackageDT() {

    }

    public DTO getData() {
        return data;
    }

    public void setData(DTO data) {
        this.data = data;
    }

    public List<DTO> getDatas() {
        return datas;
    }

    public void setDatas(List<DTO> datas) {
        this.datas = datas;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getRotaOb() {
        return rotaOb;
    }

    public void setRotaOb(String rotaOb) {
        this.rotaOb = rotaOb;
    }

    public LocalDateTime getUpdate() {
        return update;
    }

    public void setUpdate(LocalDateTime update) {
        this.update = update;
    }

    public List<DescriptionId> getItemsCombo() {
        return itemsCombo;
    }

    public void setItemsCombo(List<DescriptionId> itemsCombo) {
        this.itemsCombo = itemsCombo;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
