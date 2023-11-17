package com.condelar.cader.app.entiti;

import com.condelar.cader.core.domain.User;
import com.condelar.cader.core.structure.BaseEntity;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "fatura_cartao")
public class CardInvoice extends BaseEntity {

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

    @Column(name = "data_fechamento", nullable = false)
    private LocalDate closedDate;

    @Column(name = "data_vencimento")
    private LocalDate dueDate;

    @Column(name = "valor", nullable = false)
    private Double value;

    @Column(name = "valor_estorno", nullable = false)
    private Double refundValue;

    @Column(name = "valor_lancamentos", nullable = false)
    private Double valueLaunches;

    @OneToMany(mappedBy = "cardInvoice", cascade = CascadeType.PERSIST)
    private List<CardBuyLaunch> launches = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "id_cartao", foreignKey = @ForeignKey(name = "fk_fatura_cartao"), nullable = false)
    private Card card;

    @JoinColumn(name = "id_titulo", foreignKey = @ForeignKey(name = "fk_fatura_titulo_pagamento"), nullable = false)
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Expense expense;

    public CardInvoice() {
    }

}

