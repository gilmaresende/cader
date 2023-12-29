package com.condelar.cader.toollibs.ggson;

import com.google.gson.Gson;

public class GJsonImp {

    private Gson gson;
    private static GJsonImp instance;

    private GJsonImp() {
        this.gson = new Gson();
    }

    public static GJsonImp getInstance() {
        if (instance == null) {
            instance = new GJsonImp();
        }
        return instance;
    }

    public Gson getGson() {
        return gson;
    }

    public String toString(Object ob) {
        return getInstance().getGson().toJson(ob);
    }

    public static <Type> Type toObject(Class<Type> clazz, String json) {
        return getInstance().getGson().fromJson(json, clazz);
    }

}
