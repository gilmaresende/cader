package com.condelar.cader.app.repositories;

import com.condelar.cader.app.entiti.CardBuy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CardBuyRepository extends JpaRepository<CardBuy, Long> {


}

