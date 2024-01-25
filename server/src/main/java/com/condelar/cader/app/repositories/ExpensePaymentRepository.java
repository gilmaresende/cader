package com.condelar.cader.app.repositories;

import com.condelar.cader.app.entiti.ExpensePayment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExpensePaymentRepository extends JpaRepository<ExpensePayment, Long> {


}

