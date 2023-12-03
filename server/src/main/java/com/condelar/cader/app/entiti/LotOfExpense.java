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
@Table(name = "lote_despesa")
public class LotOfExpense extends BaseEntity {

  	private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Version
    @Column(name = "update_time")
    private LocalDateTime update;

    @Column(name = "data_cadastrp")
    private LocalDate register;


    @ManyToOne
    @JoinColumn(name = "id_usuario", foreignKey = @ForeignKey(name = "fk_lot_des_usuario"), nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "id_carteira", foreignKey = @ForeignKey(name = "fk_lot_des_carteira"), nullable = false)
    private Wallet wallet;

    @ManyToOne
    @JoinColumn(name = "id_categoria_despesa", foreignKey = @ForeignKey(name = "fk_lot_des_categoria"), nullable = false)
    private ExpenseCategory category;

    @Column(name = "descricao", nullable = false)
    private String description;

    @ManyToOne
    @JoinColumn(name = "id_meio_pagamento", foreignKey = @ForeignKey(name = "fk_lot_des_meio_pg"), nullable = false)
    private PaymentType paymentType;

    @Column(name = "primeiro_vencimento", nullable = false)
    private LocalDate firstDue;

    @Column(name = "ultimo_vencimento", nullable = false)
    private LocalDate lastDue;

    @Column(name = "valor_base", nullable = false)
    private Double valueBase;

    @Column(name = "quantidade", nullable = false)
    private Integer amount;

    @OrderBy("numero")
    @OneToMany(mappedBy = "lot", cascade = CascadeType.ALL, orphanRemoval = true)
    List<ItemLotOfExpense> items = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "id_pessoa", foreignKey = @ForeignKey(name = "fk_lot_des_pessoa"), nullable = false)
    private Person person;

    public LotOfExpense() {
    }

}

