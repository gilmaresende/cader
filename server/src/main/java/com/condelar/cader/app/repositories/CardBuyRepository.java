package com.condelar.cader.app.repositories;

import com.condelar.cader.app.entiti.CardBuy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CardBuyRepository extends JpaRepository<CardBuy, Long> {

    @Query(value = " SELECT \n" +
            " e \n" +
            " FROM CardBuy e \n")
    List<CardBuy> getFilter();
}

