package com.condelar.cader.app.entiti;

import com.condelar.cader.core.domain.User;
import com.condelar.cader.core.structure.BaseEntity;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "baixa_receita")
public class CashInflowPayment extends BaseEntity {

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

    @ManyToOne()
    @JoinColumn(name = "id_receita", foreignKey = @ForeignKey(name = "fk_baixa_id_receita"), nullable = false)
    private CashInflow cashInflow;

    @Column(name = "observacao")
    private String observation;

    @Column(name = "valor", nullable = false)
    private Double value;

    @Column(name = "data_baixa", nullable = false)
    private LocalDate payDay;

    @ManyToOne
    @JoinColumn(name = "id_carteira", foreignKey = @ForeignKey(name = "fk_baixa_id_carteira"), nullable = false)
    private Wallet wallet;


    @ManyToOne
    @JoinColumn(name = "id_meio_pagamento", foreignKey = @ForeignKey(name = "fk_baixa_id_meio_pg"), nullable = false)
    private PaymentType paymentType;

    @OneToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "id_movimento", foreignKey = @ForeignKey(name = "fk_baixa_id_mov"), nullable = false)
    private Movement movement;

    public CashInflowPayment() {
    }

}

