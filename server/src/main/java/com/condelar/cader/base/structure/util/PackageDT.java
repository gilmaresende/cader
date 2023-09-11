package com.condelar.cader.base.structure.util;

import com.condelar.cader.base.structure.BaseDTO;

import java.time.LocalDateTime;
import java.util.List;

public class PackageDT<DTO extends BaseDTO> {

   String rotaOb;

    DTO data;

    List<DTO> datas;

    private String message;

    private LocalDateTime update;

    public PackageDT(){

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
}
