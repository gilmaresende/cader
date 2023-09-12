package com.condelar.cader.tool.formatter;

import java.text.NumberFormat;

public class ToolReais {
    public static String toReais(Double valor) {
        if(valor == null){
            valor = 0d;
        }
        NumberFormat nf = NumberFormat.getCurrencyInstance();
        String valorStr = nf.format(valor);
        return valorStr;
    }
}
