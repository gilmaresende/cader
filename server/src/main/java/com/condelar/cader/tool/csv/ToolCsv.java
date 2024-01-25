package com.condelar.cader.tool.csv;

import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class ToolCsv {

    public static String mapToCsv(List<Map> list) {
        StringBuilder body = new StringBuilder();

        Set<String> keys = new HashSet<>();
        for (Map<String, Object> line : list) {
            for (String key : line.keySet()) {
                keys.add(key);
            }
        }

        for (String key : keys) {
            body.append(key).append(";");
        }
        body.append("\n");

        for (Map<String, Object> line : list) {
            StringBuilder lineSb = new StringBuilder();
            for (String key : keys) {
                Object value = line.getOrDefault(key, "-");
                if (value != null) {
                    String obStr = value.toString();
                    lineSb.append(obStr).append(";");
                } else {
                    lineSb.append("-").append(";");
                }

            }
            body.append(lineSb.toString()).append("\n");
        }
        return body.toString();
    }
}
