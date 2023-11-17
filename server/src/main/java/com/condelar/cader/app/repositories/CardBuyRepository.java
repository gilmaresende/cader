package com.condelar.cader.app.repositories;

import com.condelar.cader.app.entiti.CardBuy;
import com.condelar.cader.app.entiti.CardBuyLaunch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface CardBuyRepository extends JpaRepository<CardBuy, Long> {

    @Query(value = " SELECT \n" +
            " cardBuy \n" +
            " FROM CardBuy cardBuy \n" +
            "   INNER JOIN cardBuy.card card \n" +
            "   INNER JOIN cardBuy.launches launch \n" +
            " WHERE (:pBuyDateStart is null OR cardBuy.buyDate >= :pBuyDateStart) \n" +
            " AND (:pBuyDateEnd is null OR cardBuy.buyDate <= :pBuyDateEnd) \n" +
            " AND (:pCard = 0 OR  card.id = :pCard) \n" +
            " AND (:pLaunchDateStart is null OR launch.dateLaunch >= :pLaunchDateStart) \n" +
            " AND (:pLaunchDateEnd is null OR launch.dateLaunch <= :pLaunchDateEnd) \n" +
            " AND (cardBuy.user.id = :pUser) \n" +
            " ORDER BY cardBuy.buyDate"
    )
    List<CardBuy> getFilter(
            @Param("pBuyDateStart") LocalDate pBuyDateStart,
            @Param("pBuyDateEnd") LocalDate pBuyDateEnd,
            @Param("pCard") Long pCard,
            @Param("pLaunchDateStart") LocalDate pLaunchDateStart,
            @Param("pLaunchDateEnd") LocalDate pLaunchDateEnd,
            @Param("pUser") Long pUser
    );

    @Query(value = " SELECT \n" +
            " launch \n" +
            " FROM CardBuy cardBuy \n" +
            "   INNER JOIN cardBuy.card card \n" +
            "   INNER JOIN cardBuy.launches launch \n" +
            " WHERE (card.id = :pCard) \n" +
            " AND (launch.dateLaunch <= :pClosedDate) \n" +
            " AND (cardBuy.user.id = :pUser) \n" +
            " AND (launch.cardInvoice is null) \n" +
            " ORDER BY cardBuy.buyDate"
    )
    List<CardBuyLaunch> getLauchesForInvoice(
            @Param("pCard") Long pCard,
            @Param("pClosedDate") LocalDate pClosedDate,
            @Param("pUser") Long pUser
    );
}

