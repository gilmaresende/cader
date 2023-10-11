package com.condelar.cader.app.repositories;

import com.condelar.cader.app.entiti.CashInflow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CashInflowRepository extends JpaRepository<CashInflow, Long> {


}

