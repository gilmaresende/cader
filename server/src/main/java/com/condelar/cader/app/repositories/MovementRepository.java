package com.condelar.cader.app.repositories;

import com.condelar.cader.app.domain.Movement;
import com.condelar.cader.app.domain.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface MovementRepository extends JpaRepository<Movement, Long> {

//    @Query(value = "select\n" +
//            "m as movimento\n" +
//            "from Movement m\n" +
//            "       inner join m.wallet c\n" +
//            "       inner join m.user u\n" +
//            "where (:idCarteira is null or c.id = :idCarteira)\n" +
//            "and (:dataInicial is null or m.movimentDate >= :dataInicial)\n" +
//            "and (:dataFinal is null or m.movimentDate <= :dataFinal)\n" +
//            "and (:receitaDespesa is null or m.typeRevenueExpence = :receitaDespesa)\n" +
//            "and (user.id = :idUser)\n" +
//            "order by m.movimentDate"
//    )
//    List<Movement> getFilter(
//            @Param("idCarteira") Long idCarteira,
//            @Param("dataInicial") LocalDate dataInicial,
//            @Param("dataFinal") LocalDate dataFinal,
//            @Param("receitaDespesa") Short receitaDespesa,
//            @Param("idUser") Long idUser);

        @Query(value = "select\n" +
            "m\n" +
            "from Movement m\n" +
            "       inner join m.wallet c\n" +
            "       inner join m.user u\n" +
            "where  (u.id = :idUser)\n" +
            "and (:idCarteira is null or c.id = :idCarteira)\n" +
            "and (:dataInicial is null or m.movimentDate >= :dataInicial)\n" +
            "and (:dataFinal is null or m.movimentDate <= :dataFinal)\n" +
            "and (:receitaDespesa is null or m.typeRevenueExpence = :receitaDespesa)\n" +
            "order by m.movimentDate"
    )
    List<Movement> getFilter(@Param("idUser") Long idUser,
                             @Param("idCarteira") Long idCarteira,
                             @Param("receitaDespesa") Short receitaDespesa,
                             @Param("dataInicial") LocalDate dataInicial,
                             @Param("dataFinal") LocalDate dataFinal);
}
