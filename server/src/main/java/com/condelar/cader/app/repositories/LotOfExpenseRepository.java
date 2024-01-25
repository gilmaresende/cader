package com.condelar.cader.app.repositories;

import com.condelar.cader.app.entiti.Expense;
import com.condelar.cader.app.entiti.LotOfExpense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface LotOfExpenseRepository extends JpaRepository<LotOfExpense, Long> {

    @Query(value = " SELECT \n" +
            " lot \n" +
            " FROM LotOfExpense lot \n" +
            " 	INNER JOIN lot.person person \n" +
            " 	INNER JOIN lot.paymentType paymentType \n" +
            " 	INNER JOIN lot.category category \n" +
            " 	INNER JOIN lot.wallet wallet \n" +
            " 	INNER JOIN lot.user user \n" +
            " 	INNER JOIN lot.items item \n" +
            " 		INNER JOIN item.expense expense \n" +
            " WHERE (:pDueDateStart is null or expense.dueDate > :pDueDateStart) \n" +
            " AND (:pDueDateEnd is null or expense.dueDate < :pDueDateEnd) \n" +
            " AND (:pWallet = 0 or wallet.id = :pWallet) \n" +
            " AND (:pPaymentType = 0 or paymentType.id = :pPaymentType) \n" +
            " AND (:pPerson = 0 or person.id = :pPerson) \n" +
            " AND (:pExpenseCategory = 0 or category.id = :pExpenseCategory) \n" +
            " AND (user.id = :pUser) \n" +
            " ORDER BY lot.description \n"
    )
    List<LotOfExpense> getFilter(@Param("pDueDateStart") LocalDate pDueDateStart,
                            @Param("pDueDateEnd") LocalDate pDueDateEnd,
                            @Param("pUser") Long pUser,
                            @Param("pWallet") Long pWallet,
                            @Param("pPaymentType") Long pPaymentType,
                            @Param("pPerson") Long pPerson,
                            @Param("pExpenseCategory") Long pExpenseCategory
    );


}

