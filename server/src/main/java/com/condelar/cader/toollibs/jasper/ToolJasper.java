package com.condelar.cader.toollibs.jasper;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.JasperRunManager;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import net.sf.jasperreports.engine.util.JRLoader;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Collection;
import java.util.Map;

public class ToolJasper {

    public static byte[] playReportPDF(Collection<?> dados, Map<String, Object> parametros, String arquivoJasper) {
        try {
            InputStream inputStream = new FileInputStream(arquivoJasper);
            JasperReport jasperReport = (JasperReport) JRLoader.loadObject(inputStream);
            byte[] bytes = JasperRunManager.runReportToPdf(jasperReport, parametros,
                    new JRBeanCollectionDataSource(dados));
            inputStream.close();
            return bytes;
        } catch (JRException | IOException e) {
            throw new RuntimeException(e.getMessage());
        }
    }
}
