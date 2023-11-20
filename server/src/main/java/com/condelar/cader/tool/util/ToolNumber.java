package com.condelar.cader.tool.util;

import java.math.BigDecimal;
import java.math.RoundingMode;

public class ToolNumber {

    public static Double roundDown(Double valor, int nCasasDecimais){
        BigDecimal bd = new BigDecimal(valor).setScale(nCasasDecimais, RoundingMode.DOWN);
        double val2 = bd.doubleValue();
        return val2;
    }

    public static Double roundUp(Double valor, int nCasasDecimais){
        BigDecimal bd = new BigDecimal(valor).setScale(nCasasDecimais, RoundingMode.UP);
        double val2 = bd.doubleValue();
        return val2;
    }
}
