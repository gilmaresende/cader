package com.condelar.cader.app.repositories;

import com.condelar.cader.app.entiti.CashInflow;
import com.condelar.cader.app.entiti.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface CashInflowRepository extends JpaRepository<CashInflow, Long> {

    @Query(value = " SELECT \n" +
            " e \n" +
            " FROM CashInflow e \n" +
            " 	INNER JOIN e.wallet w \n" +
            " 	INNER JOIN e.paymentType pt \n" +
            " 	INNER JOIN e.person p \n" +
            " 	INNER JOIN e.incomeCategory ic \n" +
            " WHERE (:pDueDateStart is null or e.dueDate > :pDueDateStart) \n" +
            " AND (:pDueDateEnd is null or e.dueDate < :pDueDateEnd) \n" +
            " AND (:pStatus = 0 or e.status = :pStatus or (:pStatus = 99 and e.status in (1,3))) \n" +
            " AND (:pWallet = 0 or w.id = :pWallet) \n" +
            " AND (:pPaymentType = 0 or pt.id = :pPaymentType) \n" +
            " AND (:pPerson = 0 or p.id = :pPerson) \n" +
            " AND (:pIncomeCategory = 0 or ic.id = :pIncomeCategory) \n"
    )
    List<CashInflow> getFilter(@Param("pDueDateStart") LocalDate pDueDateStart,
                            @Param("pDueDateEnd") LocalDate pDueDateEnd,
                            @Param("pStatus") Short pStatus,
                            @Param("pWallet") Long pWallet,
                            @Param("pPaymentType") Long pPaymentType,
                            @Param("pPerson") Long pPerson,
                            @Param("pIncomeCategory") Long pIncomeCategory
    );
}

