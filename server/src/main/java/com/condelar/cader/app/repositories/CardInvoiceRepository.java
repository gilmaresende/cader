package com.condelar.cader.app.repositories;

import com.condelar.cader.app.entiti.CardInvoice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CardInvoiceRepository extends JpaRepository<CardInvoice, Long> {


}

