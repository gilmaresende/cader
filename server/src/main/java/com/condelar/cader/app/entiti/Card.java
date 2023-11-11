package com.condelar.cader.app.entiti;

import com.condelar.cader.core.domain.User;
import com.condelar.cader.core.structure.BaseEntity;
import com.condelar.cader.core.structure.RegisterEntity;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "cartao")
public class Card extends BaseEntity implements RegisterEntity {

    private static final long serialVersionUID = 1L;

    public Card() {
    }

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "ativo", nullable = false)
    private Short active;

    @Version
    @Column(name = "update_time")
    private LocalDateTime update;

    @Column(name = "data_cadastro")
    private LocalDate register;

    @ManyToOne
    @JoinColumn(name = "id_usuario", foreignKey = @ForeignKey(name = "card_usuario_fk"), nullable = false)
    private User user;

    @Column(name = "nome", nullable = false)
    private String name;

    @ManyToOne
    @JoinColumn(name = "id_pessoa", foreignKey = @ForeignKey(name = "fk_pessoa_cartao"))
    private Person personExpense;

    @ManyToOne
    @JoinColumn(name = "id_meio_pagamento", foreignKey = @ForeignKey(name = "fk_mei_pag_cartao"))
    private PaymentType paymentTypeExpense;

    @ManyToOne
    @JoinColumn(name = "id_categoria_despesa", foreignKey = @ForeignKey(name = "fk_cat_des_cartao"))
    private ExpenseCategory expenseCategoryBuyCard;

    @ManyToOne
    @JoinColumn(name = "id_carteira", foreignKey = @ForeignKey(name = "fk_cartei_cartao"))
    private Wallet walletExpense;

    @Override
    public String toString() {
        return this.name;
    }
}
