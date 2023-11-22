package com.condelar.cader.app.repositories;

import com.condelar.cader.app.entiti.CardInvoice;
import com.condelar.cader.app.entiti.CashInflow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface CardInvoiceRepository extends JpaRepository<CardInvoice, Long> {

    @Query(value = " SELECT \n" +
            " cain \n" +
            " FROM CardInvoice cain \n" +
            "   INNER JOIN cain.user user\n" +
            " WHERE (user.id = :pIdUser)\n" +
            " AND (:pIdCard = 0 OR cain.card.id >= :pIdCard) \n" +
            " AND (:pClosedDateStart IS NULL OR cain.closedDate >= :pClosedDateStart) \n" +
            " AND (:pClosedDateEnd IS NULL OR cain.closedDate <= :pClosedDateEnd) \n" +
            " AND (:pDueDateStart IS NULL OR cain.dueDate >= :pDueDateStart) \n" +
            " AND (:pDueDateEnd IS NULL OR cain.dueDate <= :pDueDateEnd) \n" +
            " ORDER BY cain.dueDate \n"
    )
    List<CardInvoice> getFilter(@Param("pClosedDateStart") LocalDate pClosedDateStart,
                                @Param("pClosedDateEnd") LocalDate pClosedDateEnd,
                                @Param("pDueDateStart") LocalDate pDueDateStart,
                                @Param("pDueDateEnd") LocalDate pDueDateEnd,
                                @Param("pIdCard") Long pIdCard,
                                @Param("pIdUser") Long pIdUser
    );

}

