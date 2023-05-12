package com.condelar.cader.app.domain;

import com.condelar.cader.app.constants.enuns.EnumYesNo;
import com.condelar.cader.base.domain.User;
import com.condelar.cader.base.structure.BaseEntity;
import com.condelar.cader.base.structure.RegisterEntity;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "meio_pagamento")
public class PaymentType extends BaseEntity implements RegisterEntity {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "descricao")
    private String name;

    @Column(name = "ativo")
    private Short active;

    @ManyToOne
    @JoinColumn(name = "id_usuario", foreignKey = @ForeignKey(name = "meio_pg_usuario_fk"))
    private User user;

    @Version
    @Column(name = "update_time")
    private LocalDateTime update;

    @Column(name = "data_cadastro")
    private LocalDate register;

    public PaymentType() {
        setActive(EnumYesNo.YES.getValue());
    }

    @Override
    public String toString() {
        return getName();
    }
}
