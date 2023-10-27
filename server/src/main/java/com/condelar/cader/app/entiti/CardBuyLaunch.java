package com.condelar.cader.app.entiti;

import com.condelar.cader.core.domain.User;
import com.condelar.cader.core.structure.BaseEntity;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "lancamento_fatura_cartao")
public class CardBuyLaunch extends BaseEntity {

  	private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Version
    @Column(name = "update_time")
    private LocalDateTime update;

    @Column(name = "data_cadastro")
    private LocalDate register;

    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_compra_cartao", foreignKey = @ForeignKey(name = "fk_lancamento_compra"), nullable = false)
    CardBuy cardBuy;

    @Column(name = "data_lancamento", nullable = false)
    LocalDate dateLaunch;

    @Column(name = "valor", nullable = false)
    Double value;

    /*@ManyToOne
    @JoinColumn(name = "id_fatura", foreignKey = @ForeignKey(name = "fk_lancamento_fatura"))
    FaturaCartao fatura;*/

    @Column(name = "numero", nullable = false)
    Integer number;

    public CardBuyLaunch() {
    }

}

