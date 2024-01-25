package com.condelar.cader.tool.util;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

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

}
