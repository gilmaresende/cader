package com.condelar.cader.tool.util;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.List;
import java.util.Map;

public class ToolDate {

    public static LocalDate getDayInNextMonth(LocalDate date, int day) {
        int year = date.getYear();
        int month = date.getMonthValue() + 1;

        if (month == 13) {
            month = 1;
            year++;
        }

        if (day > 28 && month == 2) {
            if (isLeapYear(date)) {
                day = 29;
            } else {
                day = 28;
            }
        } else if (day == 31 && (month == 4 || month == 6 || month == 9 || month == 11)) {
            day = 30;
        }
        return LocalDate.of(year, month, day);
    }


    public static Boolean isLeapYear(LocalDate dt) {
        int year = dt.getYear();
        return year % 4 == 0 && (year % 400 == 0 || year % 100 != 0);
    }

    public static LocalDate convertLongToLocalDate(long timestamp) {
        Instant instant = Instant.ofEpochMilli(timestamp);
        return instant.atZone(ZoneId.systemDefault()).toLocalDate();
    }

    public static LocalDate strToLocal(String dataString) {
        // Converter a String para um objeto ZonedDateTime
        ZonedDateTime zonedDateTime = ZonedDateTime.parse(dataString);

        // Extrair a data (sem informações de fuso horário)
        LocalDate localDate = zonedDateTime.toLocalDate();

        return localDate;
    }


    public static List<Map> changeLocalDate(List<Map> data) {
        for (Map hash : data) {
            for (Object key : hash.keySet()) {
                Object item = hash.get(key);
                if (item instanceof LocalDate) {
                    hash.put(key, item.toString());
                }
            }
        }
        return data;
    }

}
