package com.condelar.cader.app.repositories;

import com.condelar.cader.app.entiti.Expense;
import com.condelar.cader.app.entiti.ExpensePayment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

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
            " AND (:pStatus = 0 or e.status = :pStatus or (:pStatus = 99 and e.status in (2,3))) \n" +
            " AND (:pWallet = 0 or w.id = :pWallet) \n" +
            " AND (:pPaymentType = 0 or pt.id = :pPaymentType) \n" +
            " AND (:pPerson = 0 or p.id = :pPerson) \n" +
            " AND (:pExpenseCategory = 0 or ec.id = :pExpenseCategory) \n"
    )
    List<Expense> getFilter(@Param("pDueDateStart") LocalDate pDueDateStart,
                            @Param("pDueDateEnd") LocalDate pDueDateEnd,
                            @Param("pStatus") Short pStatus,
                            @Param("pWallet") Long pWallet,
                            @Param("pPaymentType") Long pPaymentType,
                            @Param("pPerson") Long pPerson,
                            @Param("pExpenseCategory") Long pExpenseCategory
    );

    @Query(value = " SELECT \n" +
            " e \n " +
            " FROM ExpensePayment e \n" +
            "   INNER JOIN e.user u \n" +
            " WHERE (u.id = :idUser) \n" +
            " AND e.id = :idPayment\n")
    Optional<ExpensePayment> findPaymentByIdAndUser(@Param("idPayment") Long idPayment, @Param("idUser") Long idUser);

    @Query(value = " SELECT \n" +
            " e.expense \n " +
            " FROM ExpensePayment e \n" +
            "   INNER JOIN e.user u \n" +
            " WHERE (u.id = :idUser) \n" +
            " AND e.id = :idPayment\n")
    Optional<Expense> findByIdPaymentAndUser(@Param("idPayment") Long idPayment, @Param("idUser") Long idUser);
}
