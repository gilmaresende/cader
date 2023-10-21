package com.condelar.cader.app.entiti;

import com.condelar.cader.core.domain.User;
import com.condelar.cader.core.structure.BaseEntity;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "receita")
public class CashInflow extends BaseEntity {

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

    @Column(name = "descricao")
    private String description;

    @Column(name = "data_abertura")
    private LocalDate openingDate;

    @Column(name = "data_vencimento")
    private LocalDate dueDate;

    @ManyToOne
    @JoinColumn(name = "id_carteira")
    private Wallet wallet;

    @ManyToOne
    @JoinColumn(name = "id_meio_pagamento")
    private PaymentType paymentType;

    @ManyToOne
    @JoinColumn(name = "id_pessoa")
    private Person person;

    @ManyToOne
    @JoinColumn(name = "id_categoria_receita")
    private IncomeCategory incomeCategory;

    @Column(name = "valor_pago")
    private Double amountPaid;

    @Column(name = "valor_total")
    private Double valueTotal;

    @Column(name = "valor_aberto")
    private Double openValue;

    @Column(name = "observacao")
    private String observation;

    @Column(name = "origem")
    private Short origin;

    @Column(name = "status")
    private Short status;

    public CashInflow() {
    }
}

