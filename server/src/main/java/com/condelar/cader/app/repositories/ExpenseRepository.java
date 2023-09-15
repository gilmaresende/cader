package com.condelar.cader.app.repositories;

import com.condelar.cader.app.domain.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> {

    @Query(value = " SELECT \n" +
            " e \n" +
            " FROM Expense e \n" +
            " 	INNER JOIN e.wallet w \n" +
            " 	INNER JOIN e.paymentType pt \n" +
            " 	INNER JOIN e.person p \n" +
            " 	INNER JOIN e.expenseCategory ec \n" +
            " WHERE (:pDueDateStart is null or e.dueDate > :pDueDateStart) \n" +
            " AND (:pDueDateEnd is null or e.dueDate < :pDueDateEnd) \n" +
            " AND (:pStatus is null or e.status = :pStatus or (:pStatus = 2 and e.status in (0,3))) \n" +
            " AND (:pWallet is null or w.id = :pWallet) \n" +
            " AND (:pPaymentType is null or pt.id = :pPaymentType) \n" +
            " AND (:pPerson is null or p.id = :pPerson) \n" +
            " AND (:pExpenseCategory is null or ec.id = :pExpenseCategory) \n"
    )
    List<Expense> getFilter(@Param("pDueDateStart") LocalDate pDueDateStart,
                            @Param("pDueDateEnd") LocalDate pDueDateEnd,
                            @Param("pStatus") Short pStatus,
                            @Param("pWallet") Long pWallet,
                            @Param("pPaymentType") Long pPaymentType,
                            @Param("pPerson") Long pPerson,
                            @Param("pExpenseCategory") Long pExpenseCategory
    );
}
