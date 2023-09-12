package com.condelar.cader.app.domain;

import com.condelar.cader.core.domain.User;
import com.condelar.cader.core.structure.BaseEntity;
import com.condelar.cader.core.structure.RegisterEntity;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "carteira")
public class Wallet extends BaseEntity implements RegisterEntity {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "nome")
    private String name;

    @Column(name = "ativa")
    private Short active;

    @Column(name = "reservada")
    private Short reserved;

    @Column(name = "permitir_cheque_especial")
    private Short canBeNegative;

    @Column(name = "saldo", nullable = false)
    private Double balance;

    @Version
    @Column(name = "update_time")
    private LocalDateTime update;

    @Column(name = "data_cadastro")
    private LocalDate register;

    @ManyToOne
    @JoinColumn(name = "id_usuario", foreignKey = @ForeignKey(name = "carteira_id_usuario_fkey"))
    private User user;

    @Override
    public String toString() {
        return getName();
    }



}
