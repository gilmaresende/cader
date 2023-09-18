package com.condelar.cader.app.domain;

import com.condelar.cader.core.domain.User;
import com.condelar.cader.core.structure.BaseEntity;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Table(name = "despesa")
public class Expense extends BaseEntity {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Version
    @Column(name = "update_time")
    private LocalDateTime update;

    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private User user;

    @Column(name = "data_cadastro")
    private LocalDate register;

    @Column(name = "descricao")
    private String description;

    @Column(name = "status")
    private Short status;

    @Column(name = "data_vencimento")
    private LocalDate dueDate;

    @ManyToOne
    @JoinColumn(name = "id_categoria_despesa")
    private ExpenseCategory expenseCategory;

    @ManyToOne
    @JoinColumn(name = "id_meio_pagamento")
    private PaymentType paymentType;

    @ManyToOne
    @JoinColumn(name = "id_carteira")
    private Wallet wallet;

    @Column(name = "origem")
    private Short origin;

    @ManyToOne
    @JoinColumn(name = "id_pessoa")
    private Person person;

    @Column(name = "valor")
    private Double value;

    @OneToMany(mappedBy = "expense", cascade = CascadeType.MERGE, orphanRemoval = true)
    private List<ExpensePayment> payments;

}
