package com.condelar.cader.tool.json;

import com.google.gson.Gson;

public class ToolJson {

    public static String toJson(Object obj){
        Gson gson = new Gson();
        String json = gson.toJson(obj);
        return json;
    }
}
