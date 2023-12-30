package com.condelar.cader.app.repositories;

import com.condelar.cader.app.entiti.BI;
import com.condelar.cader.app.repositories.projection.BIItemList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BIRepository extends JpaRepository<BI, Long> {

    @Query(nativeQuery = true, value = """
            SELECT
            bi.id,
            bi.name
            FROM report bi
            ORDER BY bi.name
            	""")
    List<BIItemList> getBIs();


}
