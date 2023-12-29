package com.condelar.cader.report.repository;

import com.condelar.cader.report.entity.BI;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BIRepository extends JpaRepository<BI, Long> {

    @Query(value = " SELECT \n" +
            " bi \n" +
            " FROM BI bi \n" +
            " ORDER BY bi.name"
    )
    List<BI> getFilter();
}